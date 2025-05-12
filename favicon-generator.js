// Dynamic 3D Favicon Generator using Three.js
(function() {
  // Create a canvas element for the favicon
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  
  // Set up Three.js scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 10);
  camera.position.z = 3;
  
  // Create renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  renderer.setSize(64, 64);
  renderer.setClearColor(0x000000, 0);
  
  // Create a gradient background
  const gradientCanvas = document.createElement('canvas');
  gradientCanvas.width = 64;
  gradientCanvas.height = 64;
  const gradientCtx = gradientCanvas.getContext('2d');
  const gradient = gradientCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, '#4f46e5');  // Primary color
  gradient.addColorStop(1, '#0ea5e9');  // Secondary color
  gradientCtx.fillStyle = gradient;
  gradientCtx.fillRect(0, 0, 64, 64);
  
  const gradientTexture = new THREE.CanvasTexture(gradientCanvas);
  const backgroundMaterial = new THREE.SpriteMaterial({ map: gradientTexture });
  const background = new THREE.Sprite(backgroundMaterial);
  background.scale.set(5, 5, 1);
  scene.add(background);
  
  // Create a stylized "H" shape for Hachem
  const createHShape = () => {
    const group = new THREE.Group();
    
    // Vertical bars of the H
    const leftBar = new THREE.Mesh(
      new THREE.BoxGeometry(0.4, 1.8, 0.4),
      new THREE.MeshPhongMaterial({ color: 0xffffff })
    );
    leftBar.position.x = -0.5;
    
    const rightBar = new THREE.Mesh(
      new THREE.BoxGeometry(0.4, 1.8, 0.4),
      new THREE.MeshPhongMaterial({ color: 0xffffff })
    );
    rightBar.position.x = 0.5;
    
    // Horizontal bar of the H
    const middleBar = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 0.4, 0.4),
      new THREE.MeshPhongMaterial({ color: 0xffffff })
    );
    
    group.add(leftBar);
    group.add(rightBar);
    group.add(middleBar);
    
    return group;
  };
  
  const hShape = createHShape();
  scene.add(hShape);
  
  // Add lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 2);
  scene.add(directionalLight);
  
  // Animation function
  function animate() {
    requestAnimationFrame(animate);
    
    // Rotate the H shape
    hShape.rotation.y += 0.02;
    hShape.rotation.x = Math.sin(Date.now() * 0.001) * 0.2;
    
    // Render the scene
    renderer.render(scene, camera);
    
    // Update favicon
    updateFavicon();
  }
  
  // Function to update the favicon with the canvas content
  function updateFavicon() {
    const link = document.querySelector("link[rel='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = canvas.toDataURL('image/png');
    document.head.appendChild(link);
  }
  
  // Start the animation
  animate();
})();
