import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const woodColors = {
  cedar: "#A0522D",
  pine: "#DEB887", 
  hemlock: "#8B7355",
  aspen: "#F5DEB3",
  birch: "#F4A460"
};

const sizeScales = {
  "2x2": { x: 1, y: 1, z: 1 },
  "2x3": { x: 1, y: 1, z: 1.5 },
  "3x3": { x: 1.5, y: 1, z: 1.5 },
  "3x4": { x: 1.5, y: 1, z: 2 },
  "4x4": { x: 2, y: 1, z: 2 },
  custom: { x: 1.5, y: 1, z: 1.5 }
};

export default function Sauna3DViewer({ configuration }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#F8F6F0");

    const camera = new THREE.PerspectiveCamera(50, mountNode.clientWidth / mountNode.clientHeight, 0.1, 1000);
    camera.position.set(0, 1.5, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountNode.appendChild(renderer.domElement);
    
    const target = new THREE.Vector3(0, 0, 0);
    camera.lookAt(target);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 15, 10);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Model Group
    const saunaGroup = new THREE.Group();
    scene.add(saunaGroup);

    // Materials
    const woodMaterial = new THREE.MeshStandardMaterial({
        color: woodColors[configuration.wood_type] || woodColors.cedar,
        roughness: 0.7,
        metalness: 0.1
    });

    // Main sauna body
    const mainBody = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), woodMaterial);
    mainBody.castShadow = true;
    mainBody.receiveShadow = true;
    saunaGroup.add(mainBody);
    
    // Ground plane
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(30, 30),
      new THREE.MeshStandardMaterial({ color: "#E8EBE4", roughness: 0.9 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.0;
    ground.receiveShadow = true;
    scene.add(ground);
    
    // Apply configurations
    const scale = sizeScales[configuration.size] || sizeScales["3x3"];
    saunaGroup.scale.set(scale.x, scale.y, scale.z);
    woodMaterial.color.set(woodColors[configuration.wood_type] || woodColors.cedar);

    // Manual Controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
        if (!isDragging) return;
        const deltaMove = {
            x: e.clientX - previousMousePosition.x,
            y: e.clientY - previousMousePosition.y
        };
        saunaGroup.rotation.y += deltaMove.x * 0.01;
        saunaGroup.rotation.x += deltaMove.y * 0.01;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    };
    
    const onMouseUp = () => {
        isDragging = false;
    };
    
    const onWheel = (e) => {
        e.preventDefault();
        const zoomSpeed = 0.1;
        const scale = e.deltaY < 0 ? 1 - zoomSpeed : 1 + zoomSpeed;
        const distance = camera.position.distanceTo(target);
        if ((distance >= 15 && scale > 1) || (distance <= 3 && scale < 1)) return;
        camera.position.sub(target).multiplyScalar(scale).add(target);
    };

    mountNode.addEventListener('mousedown', onMouseDown);
    mountNode.addEventListener('mousemove', onMouseMove);
    mountNode.addEventListener('mouseup', onMouseUp);
    mountNode.addEventListener('mouseleave', onMouseUp);
    mountNode.addEventListener('wheel', onWheel, { passive: false });
    
    // Handle resize
    const handleResize = () => {
        const width = mountNode.clientWidth;
        const height = mountNode.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }
    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationFrameId;
    const animate = () => {
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountNode.removeEventListener('mousedown', onMouseDown);
      mountNode.removeEventListener('mousemove', onMouseMove);
      mountNode.removeEventListener('mouseup', onMouseUp);
      mountNode.removeEventListener('mouseleave', onMouseUp);
      mountNode.removeEventListener('wheel', onWheel);
      cancelAnimationFrame(animationFrameId);
      if (mountNode && renderer.domElement) {
        mountNode.removeChild(renderer.domElement);
      }
      scene.traverse(object => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, [configuration]);

  return (
    <div className="w-full h-full bg-[var(--soft-birch)] rounded-2xl shadow-inner relative cursor-grab active:cursor-grabbing">
        <div ref={mountRef} className="w-full h-full rounded-2xl" />
        <div className="absolute bottom-4 left-4 text-xs text-charcoal/50 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm pointer-events-none">
            Click & drag to rotate • Scroll to zoom
        </div>
        <div className="absolute top-4 right-4 bg-white/50 px-3 py-2 rounded-lg shadow-sm backdrop-blur-sm pointer-events-none">
            <div className="text-xs text-charcoal/70 font-medium capitalize">
                {configuration.package_type || 'Select Package'}
            </div>
            <div className="text-xs text-charcoal/50 capitalize">
                {configuration.size} • {configuration.wood_type}
            </div>
        </div>
    </div>
  );
}