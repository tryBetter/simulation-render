"use strict";(self.webpackChunkbabylonjs_fluid_rendering=self.webpackChunkbabylonjs_fluid_rendering||[]).push([[365],{2365:(e,i,t)=>{t.r(i),t.d(i,{FluidSimulationDemoBoxSphere:()=>n});var s=t(6291),o=t(9820);const a=t.p+"f1cac2f30b060f04c6f1cdfa855983ff.glb";class n extends o.FluidSimulationDemoBase{constructor(e){super(e),this._sphereMesh=null,this._wallMesh=null,this._wallMesh1=null,this._wallMesh2=null,this._wallMesh3=null,this.defaultPPLine=null,this._customRootMesh=null,this._globalScale=.5,this._collisionBoxEnabled=!1;const i=.35*this._globalScale;this._boxMin=new s.Vector3(-i,-i,-i),this._boxMax=new s.Vector3(i,i,i),this._boxMesh=null,this._boxMaterial=null,this._boxMeshFront=null,this._boxMaterialFront=null,this._checkXZBounds=!0,this._origCollisionPlanes=[new s.Plane(0,0,-1,Math.abs(this._boxMax.z)),new s.Plane(0,0,1,Math.abs(this._boxMin.z)),new s.Plane(1,0,0,Math.abs(this._boxMin.x)),new s.Plane(-1,0,0,Math.abs(this._boxMax.x)),new s.Plane(0,-1,0,Math.abs(this._boxMax.y)),new s.Plane(0,1,0,Math.abs(this._boxMin.y)),new s.Plane(0,1,0,Math.abs(this._boxMin.y))],this._collisionPlanes=[];for(let e=0;e<this._origCollisionPlanes.length;++e){const i=this._origCollisionPlanes[e];this.addCollisionPlane(i.normal,i.d,e===this._origCollisionPlanes.length-1?.98:void 0)}this._angleX=0,this._angleY=0,this._prevTransfo=s.Matrix.Identity(),this._autoRotateBox=!1,this._sceneRenderObserver=null,this._sceneAfterCameraRenderObserver=null,this._sceneKeyboardObserver=null,this._onEngineResizeObserver=null,this._wallMesh=null,this._wallMesh1=null,this._wallMesh2=null,this._wallMesh3=null,this._collisionBoxEnabled&&(this.addCollisionBox(new s.Vector3(.025,0,0),new s.Vector3(90*Math.PI/180,0,0),new s.Vector3(.1,.005,.1)),this.addCollisionBox(new s.Vector3(.025,0,.035),new s.Vector3(90*Math.PI/180,0,0),new s.Vector3(.1,.005,.1)),this.addCollisionBox(new s.Vector3(.025,0,-.035),new s.Vector3(90*Math.PI/180,0,0),new s.Vector3(.1,.005,.1)),this.addCollisionBox(new s.Vector3(.025,0,-.07),new s.Vector3(90*Math.PI/180,0,0),new s.Vector3(.1,.005,.1))),this.loadCustomModel(),this._setCustomDebugLayer(),this._initMyPostProcessPipeline()}_initMyPostProcessPipeline(){this.defaultPPLine=new s.DefaultRenderingPipeline("defaultPipeline",!0,this._scene,[this._scene.activeCamera]),this.defaultPPLine.samples=1,this.defaultPPLine.depthOfFieldEnabled=!0,this.defaultPPLine.depthOfField.focalLength=246.4,this.defaultPPLine.depthOfField.fStop=32,this.defaultPPLine.depthOfField.focusDistance=1e3,this.defaultPPLine.depthOfField.lensSize=6,this.defaultPPLine.fxaaEnabled=!0,this.defaultPPLine.imageProcessingEnabled=!0,this.defaultPPLine.imageProcessing.contrast=1.8,this.defaultPPLine.imageProcessing.exposure=2.2,this.defaultPPLine.imageProcessing.toneMappingEnabled=!1,this.defaultPPLine.imageProcessing.toneMappingType=s.ImageProcessingConfiguration.TONEMAPPING_ACES,this.defaultPPLine.glowLayerEnabled=!0,this.defaultPPLine.glowLayer&&(this.defaultPPLine.glowLayer.blurKernelSize=16,this.defaultPPLine.glowLayer.intensity=1),this.defaultPPLine.bloomEnabled=!0}_setCustomDebugLayer(){const e={Shift:!1,D:!1};this._scene.onKeyboardObservable.add((i=>{switch(i.type){case s.KeyboardEventTypes.KEYDOWN:e[i.event.key]=!0;break;case s.KeyboardEventTypes.KEYUP:e[i.event.key]=!1}e.Shift&&e.D&&(this._scene.debugLayer.isVisible()?this._scene.debugLayer.hide():this._scene.debugLayer.show({overlay:!0}))}))}loadCustomModel(){s.SceneLoader.AppendAsync("",a,this._scene).then((e=>{var i;this._customRootMesh=e.getMeshByName("__root__");const t=.1*this._globalScale;null===(i=this._customRootMesh)||void 0===i||i.scaling.set(t,t,t);const o=[{intensity:0,diffuseColor:s.Color3.FromInts(174.93,255,70.125),specularColor:s.Color3.FromInts(0,222.105,255),position:new s.Vector3(0,0,-6.294)},{intensity:0,diffuseColor:s.Color3.FromInts(0,220.065,255),specularColor:s.Color3.FromInts(0,255,.678*255),position:new s.Vector3(.178,-.037,6.285)}];let a;e.lights.forEach(((e,i)=>{const t=e;void 0===a&&(a=t.parent,a.position.set(0,0,0)),a.position.set(0,0,0),t.parent=a,t.position.copyFrom(o[i].position),t.intensity=o[i].intensity,t.diffuse.copyFrom(o[i].diffuseColor),t.specular.copyFrom(o[i].specularColor)})),this._scene.registerBeforeRender((()=>{var e,i;void 0!==a&&(a.rotationQuaternion=null,a.rotation.y=(null!==(i=null===(e=this._scene.activeCameras)||void 0===e?void 0:e[0])&&void 0!==i?i:this._scene.activeCamera).alpha+Math.PI)})),e.meshes.forEach((e=>{if(e&&e.name&&e.material)switch(e.name){case"立方体.006_Baked":e.material.alpha=.4,e.alphaIndex=4,e.material.transparencyMode=s.Material.MATERIAL_ALPHABLEND,e.material.alphaMode=s.Engine.ALPHA_COMBINE;const i=e.material;i.metallic=1,i.roughness=.2,i.albedoColor.r=.5,i.albedoColor.g=.04,i.albedoColor.b=1,i.metallicReflectanceColor.r=.97,i.metallicReflectanceColor.g=.029,i.metallicReflectanceColor.b=1,i.anisotropy.isEnabled=!0,i.anisotropy.intensity=.8,i.sheen.isEnabled=!0,i.sheen.intensity=1,i.sheen.color.r=.816,i.sheen.color.g=.006,i.sheen.color.b=1,i.sheen.useRoughnessFromMainTexture=!0,i.subSurface.tintColor.r=.541,i.subSurface.tintColor.g=.933,i.subSurface.tintColor.b=1,i.subSurface.isScatteringEnabled=!0,i.subSurface.isTranslucencyEnabled=!0,i.disableDepthWrite=!0;break;case"布尔":case"柱体.001_Baked":case"平面_primitive0":case"平面_primitive1":case"边线_Baked":e.visibility=0;break;case"立方体.011_Baked":e.alphaIndex=3,e.material.alpha=.6,e.material.transparencyMode=s.Material.MATERIAL_ALPHABLEND,e.material.alphaMode=s.Engine.ALPHA_COMBINE,e.material.emissiveColor=s.Color3.FromInts(3.4,0,51),e.material.metallic=1,e.material.roughness=0;break;case"立方体.013_Baked":e.alphaIndex=3,e.material.alpha=.4,e.material.transparencyMode=s.Material.MATERIAL_ALPHABLEND,e.material.alphaMode=s.Engine.ALPHA_COMBINE,e.material.emissiveColor=s.Color3.FromInts(12.6,0,148),e.material.metallic=.93,e.material.roughness=0;break;case"立方体.012_Baked":case"立方体.014_Baked":e.alphaIndex=3,e.material.alpha=.26,e.material.transparencyMode=s.Material.MATERIAL_ALPHABLEND,e.material.alphaMode=s.Engine.ALPHA_ADD,e.material.emissiveColor=s.Color3.FromInts(.059,.161,1),e.material.metallic=1,e.material.roughness=.15}}))}))}async _run(){var e,i;for(let e=0;e<this._origCollisionPlanes.length;++e)this._collisionPlanes.push(this._collisionObjects[e]);this._collisionPlanes[this._collisionPlanes.length-1][1].disabled=!0,this._collisionBoxEnabled&&(this._wallMesh=this._collisionObjects[this._origCollisionPlanes.length][0],this._wallMesh1=this._collisionObjects[this._origCollisionPlanes.length+1][0],this._wallMesh2=this._collisionObjects[this._origCollisionPlanes.length+2][0],this._wallMesh3=this._collisionObjects[this._origCollisionPlanes.length+3][0]),this._wallMesh&&this._wallMesh.material&&(this._wallMesh.material.alpha=0),this._wallMesh1&&this._wallMesh1.material&&(this._wallMesh1.material.alpha=0),this._wallMesh2&&this._wallMesh2.material&&(this._wallMesh2.material.alpha=0),this._wallMesh3&&this._wallMesh3.material&&(this._wallMesh3.material.alpha=0);const t=null!==(i=null===(e=this._scene.activeCameras)||void 0===e?void 0:e[0])&&void 0!==i?i:this._scene.activeCamera,o=new s.Scene(this._scene.getEngine()),a=new s.ArcRotateCamera("camera",14.33,1.594,this._globalScale,s.Vector3.Zero(),o);a.lowerRadiusLimit=this._globalScale,a.upperRadiusLimit=this._globalScale,a.useAutoRotationBehavior=!0,a.attachControl(document.getElementById("renderCanvas"),!0),o.attachControl(!0,!0,!0),o.clearColor=new s.Color4(0,0,0,0),o.autoClear=!1,this._scene.onAfterCameraRenderObservable.add((()=>{o.render(),this._customRootMesh&&(this._customRootMesh.rotationQuaternion=a.absoluteRotation,this._rotateMeshes(-a.alpha,-a.beta))})),t&&(t.alpha=1,t.beta=1.1,t.radius=1.9,t.panningSensibility=0,t.lowerAlphaLimit=1,t.upperAlphaLimit=1,t.lowerBetaLimit=1.1,t.upperBetaLimit=1.1,t.lowerRadiusLimit=1.9*this._globalScale,t.upperRadiusLimit=1.9*this._globalScale),this._fluidRenderObject.object.particleSize=.03,this._fluidRenderObject.object.particleThicknessAlpha=.017,this._fluidSim.smoothingRadius=.04,this._particleGenerator.particleRadius=.02,this._fluidSim.densityReference=1e4,this._fluidSim.pressureConstant=.4,this._fluidSim.viscosity=.002,this._fluidSim.maxVelocity=6,this._fluidSim.maxAcceleration=1e4,this._onEngineResizeObserver=this._engine.onResizeObservable.add((()=>{var e;null===(e=null==t?void 0:t.outputRenderTarget)||void 0===e||e.resize({width:this._engine.getRenderWidth(!0),height:this._engine.getRenderHeight(!0)})})),super._run().then((()=>{setTimeout((()=>{document.getElementById("renderCanvas").style.opacity="1.0"}),2900)}))}dispose(){var e,i,t,s,o,a,n;super.dispose();const l=null!==(i=null===(e=this._scene.activeCameras)||void 0===e?void 0:e[0])&&void 0!==i?i:this._scene.activeCamera;l&&(null===(t=l.outputRenderTarget)||void 0===t||t.dispose(),l.outputRenderTarget=null),this._scene.onBeforeRenderObservable.remove(this._sceneRenderObserver),this._scene.onAfterCameraRenderObservable.remove(this._sceneAfterCameraRenderObserver),this._scene.onKeyboardObservable.remove(this._sceneKeyboardObserver),null===(s=this.defaultPPLine)||void 0===s||s.dispose(),null===(o=this._boxMesh)||void 0===o||o.dispose(),null===(a=this._boxMeshFront)||void 0===a||a.dispose(),null===(n=this._boxMaterial)||void 0===n||n.dispose(),this._engine.onResizeObservable.remove(this._onEngineResizeObserver)}_makeGUIMainMenu(){const e={checkXZBounds:!0,autoRotateBox:!1,restart:()=>{this._angleX=this._angleY=0,this._autoRotateBox=!1,null==t||t.setValue(!1),this._rotateMeshes(0,0),this._generateParticles()}},i=this._gui;let t=null;i.add(e,"restart").name("Restart"),i.add(e,"checkXZBounds").name("Check box bounds").onChange((e=>{var i,s;this._checkXZBounds=e,null===(i=this._boxMesh)||void 0===i||i.setEnabled(e),null===(s=this._boxMeshFront)||void 0===s||s.setEnabled(e);for(let i=0;i<this._collisionPlanes.length;++i)this._collisionPlanes[i][1].disabled=!e&&i<this._collisionPlanes.length-1||e&&i===this._collisionPlanes.length-1;e||(this._autoRotateBox=!1,null==t||t.setValue(!1))})),t=i.add(e,"autoRotateBox").name("Auto rotate box").onChange((e=>{this._autoRotateBox=e}))}_onPaused(e){super._onPaused(e),e&&(this._autoRotateBox=!1)}_rotateMeshes(e,i){var t,o,a,n;const l=s.Matrix.RotationYawPitchRoll(e,0,i),r=[new s.Vector3(this._boxMin.x,this._boxMin.y,this._boxMin.z),new s.Vector3(this._boxMin.x,this._boxMax.y,this._boxMin.z),new s.Vector3(this._boxMin.x,this._boxMax.y,this._boxMax.z),new s.Vector3(this._boxMin.x,this._boxMin.y,this._boxMax.z),new s.Vector3(this._boxMax.x,this._boxMin.y,this._boxMin.z),new s.Vector3(this._boxMax.x,this._boxMax.y,this._boxMin.z),new s.Vector3(this._boxMax.x,this._boxMax.y,this._boxMax.z),new s.Vector3(this._boxMax.x,this._boxMin.y,this._boxMax.z)];let h=1e10;for(let e=0;e<r.length;++e){const i=s.Vector3.TransformCoordinates(r[e],l);h=Math.min(h,i.y)}this._collisionPlanes[this._origCollisionPlanes.length-1][1].params[1]=Math.abs(h)+.02;for(let e=0;e<this._origCollisionPlanes.length-1;++e){const i=this._origCollisionPlanes[e].transform(l);this._collisionPlanes[e][1].params=[i.normal,i.d]}const _=s.Quaternion.FromRotationMatrix(l);if(this._prevTransfo.invert(),this._sphereMesh){const e=s.Vector3.TransformCoordinates(this._sphereMesh.position,this._prevTransfo);this._sphereMesh.rotationQuaternion=_,this._sphereMesh.position=s.Vector3.TransformCoordinates(e,l)}if(this._wallMesh){const e=s.Vector3.TransformCoordinates(this._wallMesh.position,this._prevTransfo),i=s.Matrix.RotationYawPitchRoll(0,90*Math.PI/180,0),o=s.Matrix.Translation(e.x,e.y,e.z);i.multiplyToRef(o,i).multiplyToRef(l,i);const a=null!==(t=this._wallMesh.rotationQuaternion)&&void 0!==t?t:new s.Quaternion;i.decompose(void 0,a,this._wallMesh.position),this._wallMesh.rotationQuaternion=a}if(this._wallMesh1){const e=s.Vector3.TransformCoordinates(this._wallMesh1.position,this._prevTransfo),i=s.Matrix.RotationYawPitchRoll(0,90*Math.PI/180,0),t=s.Matrix.Translation(e.x,e.y,e.z);i.multiplyToRef(t,i).multiplyToRef(l,i);const a=null!==(o=this._wallMesh1.rotationQuaternion)&&void 0!==o?o:new s.Quaternion;i.decompose(void 0,a,this._wallMesh1.position),this._wallMesh1.rotationQuaternion=a}if(this._wallMesh2){const e=s.Vector3.TransformCoordinates(this._wallMesh2.position,this._prevTransfo),i=s.Matrix.RotationYawPitchRoll(0,90*Math.PI/180,0),t=s.Matrix.Translation(e.x,e.y,e.z);i.multiplyToRef(t,i).multiplyToRef(l,i);const o=null!==(a=this._wallMesh2.rotationQuaternion)&&void 0!==a?a:new s.Quaternion;i.decompose(void 0,o,this._wallMesh2.position),this._wallMesh2.rotationQuaternion=o}if(this._wallMesh3){const e=s.Vector3.TransformCoordinates(this._wallMesh3.position,this._prevTransfo),i=s.Matrix.RotationYawPitchRoll(0,90*Math.PI/180,0),t=s.Matrix.Translation(e.x,e.y,e.z);i.multiplyToRef(t,i).multiplyToRef(l,i);const o=null!==(n=this._wallMesh3.rotationQuaternion)&&void 0!==n?n:new s.Quaternion;i.decompose(void 0,o,this._wallMesh3.position),this._wallMesh3.rotationQuaternion=o}this._boxMesh&&this._boxMeshFront&&(this._boxMesh.rotationQuaternion=this._boxMeshFront.rotationQuaternion=_,this._boxMesh.position.x=(this._boxMin.x+this._boxMax.x)/2,this._boxMesh.position.y=(this._boxMin.y+this._boxMax.y)/2,this._boxMesh.position.z=(this._boxMin.z+this._boxMax.z)/2,this._boxMesh.position=s.Vector3.TransformCoordinates(this._boxMesh.position,l),this._boxMeshFront.position=this._boxMesh.position),this._prevTransfo.copyFrom(l)}}}}]);
//# sourceMappingURL=365.44d8357f616acf4e4238.js.map