import * as THREE from "https://cdn.skypack.dev/three@0.140.1/build/three.module";
import { OrbitControls } from "https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/controls/OrbitControls.js";

const config = {
	scene: {
		speed: 0.1
	},
	object: {
		speed: 0.25
	},
	theme: {
		
	}
};

class Panel {
	constructor() {
		this.init();
	}
	init() {
		function generatePane() {
			const pn = new Tweakpane.Pane({ title: "Panel" });
			const sn = pn.addFolder({ title: "Scene" });
			sn.addInput(config.scene, "speed", { min: 0, max: 1, label: "Speed" });
			const ob = pn.addFolder({ title: "Object" });
			ob.addInput(config.object, "speed", { min: 0, max: 1, label: "Speed" });
		}
		generatePane();
	}
}

class Control {
	constructor(props) {
		this.controls = new OrbitControls(props.camera, props.canvas);
		this.init();
	}
	init() {
		this.controls.target.set(0, 0, 0);
		this.controls.rotateSpeed = 0.2;
		this.controls.enableZoom = false;
		this.controls.enableDamping = true;
		this.controls.dampingFactor = 0.08;
		this.update();
	}
	update() {
		this.controls.update();
	}
}

class Space {
	constructor(props) {
		this.name = props.name ? props.name : 'Null';
		this.canvas = props.canvas ? props.canvas : null;
		this.main();
	}
	main() {
		this.renderer = new THREE.WebGLRenderer({
			canvas: this.canvas,
			antialias: true,
			alpha: true
		});
		this.clock = new THREE.Clock();
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(35);
		this.camera.position.set(0, 2, 10);
		this.scene.background = new THREE.Color(0xbbbbdd);
		this.control = new Control({ camera: this.camera, canvas: this.canvas });
		//--
		this.axesHelper = new THREE.AxesHelper(2);
		this.axesHelper.position.y = -1.5;
		this.scene.add(this.axesHelper);
		this.renderer.shadowMap.enabled = true;
		this.renderer.shadowMap.type = THREE.PCFShoftSHadowMap;
		this.init();
	}
	init() {
		this.lights();
		this.object();
		this.base();
		this.floor();
		this.render();
		this.loop();
		this.resize();
	}
	lights() {
		this.h_light = new THREE.HemisphereLight(0xeeeeff, 0xaaaacc, 1);
		this.p_light = new THREE.PointLight(0xffffff, 0.2);
		this.p_light.castShadow = true;
		this.p_light.position.set(1, 5, 1);
		this.scene.add(this.h_light, this.p_light);
	}
	object() {
		const o_geo = new THREE.IcosahedronGeometry();
		const o_mat = new THREE.MeshLambertMaterial({color:0xeeeeee});
		const o_nor = new THREE.MeshNormalMaterial({wireframe:true})
		this.o_mes = new THREE.Mesh(o_geo, o_mat);
		this.o_wir = new THREE.Mesh(o_geo, o_nor);
		this.o_mes.castShadow = true;
		this.o_mes.receiveShadow = true;
		this.o_mes.add(this.o_wir);
		this.scene.add(this.o_mes);
	}
	base() {
		const b_geo = new THREE.BoxGeometry(2, 0.2, 2);
		const b_mat = new THREE.MeshLambertMaterial({color:0xeeeeee});
		const b_nor = new THREE.MeshNormalMaterial({wireframe:true})
		this.b_mes = new THREE.Mesh(b_geo, b_mat);
		this.b_wir = new THREE.Mesh(b_geo, b_nor);
		this.b_mes.castShadow = true;
		this.b_mes.receiveShadow = true;
		this.b_mes.position.y = -1.4;
		this.b_mes.add(this.b_wir);
		this.scene.add(this.b_mes);
		
	}
	floor() {
		const f_geo = new THREE.PlaneGeometry(10, 10);
		const f_mat = new THREE.ShadowMaterial({ opacity: 0.5, color: 0xaaaacc });
		this.f_mes = new THREE.Mesh(f_geo, f_mat);
		this.f_mes.rotateX(-Math.PI / 2);
		this.f_mes.position.y = -1.5;
		this.f_mes.receiveShadow = true;
		this.scene.add(this.f_mes);
	}
	resize() {
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
	}
	render() {
		this.scene.rotation.y = this.clock.getElapsedTime() * config.scene.speed;
		this.o_mes.rotation.y = -this.clock.getElapsedTime() * config.object.speed;
		this.camera.lookAt(this.scene.position);
		this.camera.updateMatrixWorld();
		this.renderer.render(this.scene, this.camera);
		this.control.update();
	}
	loop() {
		this.render();
		requestAnimationFrame(this.loop.bind(this));
	}
}

const canvas = document.querySelector("canvas");
const world = new Space({ canvas });
const panel = new Panel();
window.addEventListener("resize", () => world.resize());
window.addEventListener("load", () => world.resize());
