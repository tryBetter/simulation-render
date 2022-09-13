"use strict";(self.webpackChunkbabylonjs_fluid_rendering=self.webpackChunkbabylonjs_fluid_rendering||[]).push([[419,731],{3731:(e,t,r)=>{r.r(t),r.d(t,{FluidRenderingRenderTarget:()=>i});var s=r(6291);class i{constructor(e,t,r,i,n,h,l=s.Constants.TEXTURETYPE_FLOAT,u=s.Constants.TEXTUREFORMAT_R,a=s.Constants.TEXTURETYPE_FLOAT,d=s.Constants.TEXTUREFORMAT_R,_=!1,o=null,T=!0,p=1){this.enableBlur=!0,this.blurSizeDivisor=1,this.blurFilterSize=7,this._blurNumIterations=3,this.blurMaxFilterSize=100,this.blurDepthScale=10,this.particleSize=.02,this.onDisposeObservable=new s.Observable,this._name=e,this._scene=t,this._camera=o,this._engine=t.getEngine(),this._width=r,this._height=i,this._blurTextureSizeX=n,this._blurTextureSizeY=h,this._textureType=l,this._textureFormat=u,this._blurTextureType=a,this._blurTextureFormat=d,this._useStandardBlur=_,this._generateDepthBuffer=T,this._samples=p,this._postProcessRunningIndex=0,this.enableBlur=0!==n&&0!==h,this._rt=null,this._texture=null,this._rtBlur=null,this._textureBlurred=null,this._blurPostProcesses=null}get blurNumIterations(){return this._blurNumIterations}set blurNumIterations(e){if(this._blurNumIterations!==e&&(this._blurNumIterations=e,null!==this._blurPostProcesses)){const e=this._blurPostProcesses[0],t=this._blurPostProcesses[1];this._blurPostProcesses=[...Array(2*this._blurNumIterations).keys()].map((r=>1&r?t:e))}}get renderTarget(){return this._rt}get renderTargetBlur(){return this._rtBlur}get texture(){return this._texture}get textureBlur(){return this._textureBlurred}initialize(){if(this.dispose(),this._createRenderTarget(),this.enableBlur&&this._texture){const[e,t,r]=this._createBlurPostProcesses(this._texture,this._blurTextureType,this._blurTextureFormat,this.blurSizeDivisor,this._name,this._useStandardBlur);this._rtBlur=e,this._textureBlurred=t,this._blurPostProcesses=r}}applyBlurPostProcesses(){this.enableBlur&&this._blurPostProcesses&&(this._postProcessRunningIndex=0,this._scene.postProcessManager.directRender(this._blurPostProcesses,this._rtBlur,!0),this._engine.unBindFramebuffer(this._rtBlur))}_createRenderTarget(){this._rt=this._engine.createRenderTargetTexture({width:this._width,height:this._height},{generateMipMaps:!1,type:this._textureType,format:this._textureFormat,samplingMode:s.Constants.TEXTURE_NEAREST_SAMPLINGMODE,generateDepthBuffer:this._generateDepthBuffer,generateStencilBuffer:!1,samples:this._samples});const e=this._rt.texture;this._texture=new s.Texture(null,this._scene),this._texture.name="rtt"+this._name,this._texture._texture=e,this._texture.wrapU=s.Texture.CLAMP_ADDRESSMODE,this._texture.wrapV=s.Texture.CLAMP_ADDRESSMODE,this._texture.anisotropicFilteringLevel=1}_createBlurPostProcesses(e,t,r,i,n,h=!1){const l=this._scene.getEngine(),u=new s.Vector2(Math.floor(this._blurTextureSizeX/i),Math.floor(this._blurTextureSizeY/i)),a=t===s.Constants.TEXTURETYPE_FLOAT&&l.getCaps().textureFloatLinearFiltering||t===s.Constants.TEXTURETYPE_HALF_FLOAT&&l.getCaps().textureHalfFloatLinearFiltering,d=this._engine.createRenderTargetTexture({width:u.x,height:u.y},{generateMipMaps:!1,type:t,format:r,samplingMode:a?s.Constants.TEXTURE_BILINEAR_SAMPLINGMODE:s.Constants.TEXTURE_NEAREST_SAMPLINGMODE,generateDepthBuffer:!1,generateStencilBuffer:!1,samples:this._samples}),_=d.texture,o=new s.Texture(null,this._scene);if(o.name="rttBlurred"+n,o._texture=_,o.wrapU=s.Texture.CLAMP_ADDRESSMODE,o.wrapV=s.Texture.CLAMP_ADDRESSMODE,o.anisotropicFilteringLevel=1,h){const i=new s.PostProcess("BilateralBlurX","standardBlur",["filterSize","blurDir"],null,1,null,s.Constants.TEXTURE_NEAREST_SAMPLINGMODE,l,!0,null,t,void 0,void 0,void 0,r);i.samples=this._samples,i.externalTextureSamplerBinding=!0,i.onApplyObservable.add((t=>{0===this._postProcessRunningIndex?t.setTexture("textureSampler",e):t._bindTexture("textureSampler",i.inputTexture.texture),t.setInt("filterSize",this.blurFilterSize),t.setFloat2("blurDir",1/this._blurTextureSizeX,0),this._postProcessRunningIndex++})),i.onSizeChangedObservable.add((()=>{i._textures.forEach((e=>{e.texture.wrapU=s.Texture.CLAMP_ADDRESSMODE,e.texture.wrapV=s.Texture.CLAMP_ADDRESSMODE}))})),this._fixReusablePostProcess(i);const n=new s.PostProcess("BilateralBlurY","standardBlur",["filterSize","blurDir"],null,1,null,s.Constants.TEXTURE_NEAREST_SAMPLINGMODE,l,!0,null,t,void 0,void 0,void 0,r);return n.samples=this._samples,n.onApplyObservable.add((e=>{e.setInt("filterSize",this.blurFilterSize),e.setFloat2("blurDir",0,1/this._blurTextureSizeY),this._postProcessRunningIndex++})),n.onSizeChangedObservable.add((()=>{n._textures.forEach((e=>{e.texture.wrapU=s.Texture.CLAMP_ADDRESSMODE,e.texture.wrapV=s.Texture.CLAMP_ADDRESSMODE}))})),this._fixReusablePostProcess(n),i.autoClear=!1,n.autoClear=!1,[d,o,[...Array(2*this._blurNumIterations).keys()].map((e=>1&e?n:i))]}{const i=["maxFilterSize","blurDir","projectedParticleConstant","depthThreshold"],n=new s.PostProcess("BilateralBlurX","bilateralBlur",i,null,1,null,s.Constants.TEXTURE_NEAREST_SAMPLINGMODE,l,!0,null,t,void 0,void 0,void 0,r);n.samples=this._samples,n.externalTextureSamplerBinding=!0,n.onApplyObservable.add((t=>{0===this._postProcessRunningIndex?t.setTexture("textureSampler",e):t._bindTexture("textureSampler",n.inputTexture.texture),t.setInt("maxFilterSize",this.blurMaxFilterSize),t.setFloat2("blurDir",1/this._blurTextureSizeX,0),t.setFloat("projectedParticleConstant",this._getProjectedParticleConstant()),t.setFloat("depthThreshold",this._getDepthThreshold()),this._postProcessRunningIndex++})),n.onSizeChangedObservable.add((()=>{n._textures.forEach((e=>{e.texture.wrapU=s.Texture.CLAMP_ADDRESSMODE,e.texture.wrapV=s.Texture.CLAMP_ADDRESSMODE}))})),this._fixReusablePostProcess(n);const h=new s.PostProcess("BilateralBlurY","bilateralBlur",i,null,1,null,s.Constants.TEXTURE_NEAREST_SAMPLINGMODE,l,!0,null,t,void 0,void 0,void 0,r);return h.samples=this._samples,h.onApplyObservable.add((e=>{e.setInt("maxFilterSize",this.blurMaxFilterSize),e.setFloat2("blurDir",0,1/this._blurTextureSizeY),e.setFloat("projectedParticleConstant",this._getProjectedParticleConstant()),e.setFloat("depthThreshold",this._getDepthThreshold()),this._postProcessRunningIndex++})),h.onSizeChangedObservable.add((()=>{h._textures.forEach((e=>{e.texture.wrapU=s.Texture.CLAMP_ADDRESSMODE,e.texture.wrapV=s.Texture.CLAMP_ADDRESSMODE}))})),this._fixReusablePostProcess(h),n.autoClear=!1,h.autoClear=!1,[d,o,[...Array(2*this._blurNumIterations).keys()].map((e=>1&e?h:n))]}}_fixReusablePostProcess(e){e.isReusable()&&(e.onActivateObservable.add((()=>{e._currentRenderTextureInd=(e._currentRenderTextureInd+1)%2})),e.onApplyObservable.add((()=>{e._currentRenderTextureInd=(e._currentRenderTextureInd+1)%2})))}_getProjectedParticleConstant(){var e,t;return this.blurFilterSize*this.particleSize*.05*(this._height/2)/Math.tan((null!==(t=null===(e=this._camera)||void 0===e?void 0:e.fov)&&void 0!==t?t:45*Math.PI/180)/2)}_getDepthThreshold(){return this.particleSize/2*this.blurDepthScale}dispose(){var e,t;this.onDisposeObservable.hasObservers()&&this.onDisposeObservable.notifyObservers(this),null===(e=this._rt)||void 0===e||e.dispose(),this._rt=null,null===(t=this._rtBlur)||void 0===t||t.dispose(),this._rtBlur=null,this._blurPostProcesses&&(this._blurPostProcesses[0].dispose(),this._blurPostProcesses[1].dispose()),this._blurPostProcesses=null}}},7419:(e,t,r)=>{r.r(t),r.d(t,{FluidRenderingDebug:()=>s,FluidRenderingTargetRenderer:()=>h});var s,i=r(6291),n=r(3731);!function(e){e[e.DepthTexture=0]="DepthTexture",e[e.DepthBlurredTexture=1]="DepthBlurredTexture",e[e.ThicknessTexture=2]="ThicknessTexture",e[e.ThicknessBlurredTexture=3]="ThicknessBlurredTexture",e[e.DiffuseTexture=4]="DiffuseTexture",e[e.Normals=5]="Normals",e[e.DiffuseRendering=6]="DiffuseRendering"}(s||(s={}));class h{constructor(e,t){this._generateDiffuseTexture=!1,this.fluidColor=new i.Color3(.085,.6375,.765),this.surfaceColor=new i.Color3(0,.3,.8),this.density=2,this.refractionStrength=0,this.fresnelClamp=0,this.specularPower=2e3,this.minimumThickness=0,this.dirLight=new i.Vector3(-2,-1,1).normalize(),this._debugFeature=s.DepthBlurredTexture,this._debug=!1,this._enableBlurDepth=!0,this._blurDepthSizeDivisor=1,this._blurDepthFilterSize=7,this._blurDepthNumIterations=3,this._blurDepthMaxFilterSize=100,this._blurDepthDepthScale=10,this._enableBlurThickness=!0,this._blurThicknessSizeDivisor=1,this._blurThicknessFilterSize=5,this._blurThicknessNumIterations=1,this._useFixedThickness=!1,this.onUseVelocityChanged=new i.Observable,this._useVelocity=!1,this._depthMapSize=null,this._thicknessMapSize=null,this._diffuseMapSize=null,this._samples=1,this._scene=e,this._engine=e.getEngine(),this._camera=null!=t?t:e.activeCamera,this._needInitialization=!0,this._bgDepthTexture=null,this._invProjectionMatrix=new i.Matrix,this._depthClearColor=new i.Color4(1e6,1e6,1e6,1),this._thicknessClearColor=new i.Color4(0,0,0,1),this._depthRenderTarget=null,this._diffuseRenderTarget=null,this._thicknessRenderTarget=null,this._renderPostProcess=null}get needInitialization(){return this._needInitialization}get generateDiffuseTexture(){return this._generateDiffuseTexture}set generateDiffuseTexture(e){this._generateDiffuseTexture!==e&&(this._generateDiffuseTexture=e,this._needInitialization=!0)}get debugFeature(){return this._debugFeature}set debugFeature(e){this._debugFeature!==e&&(this._needInitialization=!0,this._debugFeature=e)}get debug(){return this._debug}set debug(e){this._debug!==e&&(this._debug=e,this._needInitialization=!0)}get enableBlurDepth(){return this._enableBlurDepth}set enableBlurDepth(e){this._enableBlurDepth!==e&&(this._enableBlurDepth=e,this._needInitialization=!0)}get blurDepthSizeDivisor(){return this._blurDepthSizeDivisor}set blurDepthSizeDivisor(e){this._blurDepthSizeDivisor!==e&&(this._blurDepthSizeDivisor=e,this._needInitialization=!0)}get blurDepthFilterSize(){return this._blurDepthFilterSize}set blurDepthFilterSize(e){this._blurDepthFilterSize!==e&&(this._blurDepthFilterSize=e,this._setBlurParameters())}get blurDepthNumIterations(){return this._blurDepthNumIterations}set blurDepthNumIterations(e){this._blurDepthNumIterations!==e&&(this._blurDepthNumIterations=e,this._setBlurParameters())}get blurDepthMaxFilterSize(){return this._blurDepthMaxFilterSize}set blurDepthMaxFilterSize(e){this._blurDepthMaxFilterSize!==e&&(this._blurDepthMaxFilterSize=e,this._setBlurParameters())}get blurDepthDepthScale(){return this._blurDepthDepthScale}set blurDepthDepthScale(e){this._blurDepthDepthScale!==e&&(this._blurDepthDepthScale=e,this._setBlurParameters())}get enableBlurThickness(){return this._enableBlurThickness}set enableBlurThickness(e){this._enableBlurThickness!==e&&(this._enableBlurThickness=e,this._needInitialization=!0)}get blurThicknessSizeDivisor(){return this._blurThicknessSizeDivisor}set blurThicknessSizeDivisor(e){this._blurThicknessSizeDivisor!==e&&(this._blurThicknessSizeDivisor=e,this._needInitialization=!0)}get blurThicknessFilterSize(){return this._blurThicknessFilterSize}set blurThicknessFilterSize(e){this._blurThicknessFilterSize!==e&&(this._blurThicknessFilterSize=e,this._setBlurParameters())}get blurThicknessNumIterations(){return this._blurThicknessNumIterations}set blurThicknessNumIterations(e){this._blurThicknessNumIterations!==e&&(this._blurThicknessNumIterations=e,this._setBlurParameters())}get useFixedThickness(){return this._useFixedThickness}set useFixedThickness(e){this._useFixedThickness!==e&&(this._useFixedThickness=e,this._needInitialization=!0)}get useVelocity(){return this._useVelocity}set useVelocity(e){this._useVelocity!==e&&(this._useVelocity=e,this._needInitialization=!0,this.onUseVelocityChanged.notifyObservers(this))}get depthMapSize(){return this._depthMapSize}set depthMapSize(e){this._depthMapSize!==e&&(this._depthMapSize=e,this._needInitialization=!0)}get thicknessMapSize(){return this._thicknessMapSize}set thicknessMapSize(e){this._thicknessMapSize!==e&&(this._thicknessMapSize=e,this._needInitialization=!0)}get diffuseMapSize(){return this._diffuseMapSize}set diffuseMapSize(e){this._diffuseMapSize!==e&&(this._diffuseMapSize=e,this._needInitialization=!0)}get samples(){return this._samples}set samples(e){this._samples!==e&&(this._samples=e,this._needInitialization=!0)}get camera(){return this._camera}get renderPostProcess(){return this._renderPostProcess}get depthRenderTarget(){return this._depthRenderTarget}get thicknessRenderTarget(){return this._thicknessRenderTarget}get diffuseRenderTarget(){return this._diffuseRenderTarget}initialize(){var e,t,r;this.dispose(),this._needInitialization=!1;const s=null!==(e=this._depthMapSize)&&void 0!==e?e:this._engine.getRenderWidth(),h=null!==this._depthMapSize?Math.round(this._depthMapSize*this._engine.getRenderHeight()/this._engine.getRenderWidth()):this._engine.getRenderHeight();if(this._depthRenderTarget=new n.FluidRenderingRenderTarget("Depth",this._scene,s,h,s,h,i.Constants.TEXTURETYPE_FLOAT,i.Constants.TEXTUREFORMAT_RG,i.Constants.TEXTURETYPE_FLOAT,i.Constants.TEXTUREFORMAT_RG,!1,this._camera,!0,this._samples),this._initializeRenderTarget(this._depthRenderTarget),this.generateDiffuseTexture){const e=null!==(t=this._diffuseMapSize)&&void 0!==t?t:this._engine.getRenderWidth(),r=null!==this._diffuseMapSize?Math.round(this._diffuseMapSize*this._engine.getRenderHeight()/this._engine.getRenderWidth()):this._engine.getRenderHeight();this._diffuseRenderTarget=new n.FluidRenderingRenderTarget("Diffuse",this._scene,e,r,0,0,i.Constants.TEXTURETYPE_UNSIGNED_BYTE,i.Constants.TEXTUREFORMAT_RGBA,i.Constants.TEXTURETYPE_UNSIGNED_BYTE,i.Constants.TEXTUREFORMAT_RGBA,!0,this._camera,!0,this._samples),this._initializeRenderTarget(this._diffuseRenderTarget)}const l=null!==(r=this._thicknessMapSize)&&void 0!==r?r:this._engine.getRenderWidth(),u=null!==this._thicknessMapSize?Math.round(this._thicknessMapSize*this._engine.getRenderHeight()/this._engine.getRenderWidth()):this._engine.getRenderHeight();this._useFixedThickness||(this._thicknessRenderTarget=new n.FluidRenderingRenderTarget("Thickness",this._scene,l,u,l,u,i.Constants.TEXTURETYPE_HALF_FLOAT,i.Constants.TEXTUREFORMAT_R,i.Constants.TEXTURETYPE_HALF_FLOAT,i.Constants.TEXTUREFORMAT_R,!0,this._camera,!1,this._samples),this._initializeRenderTarget(this._thicknessRenderTarget)),this._createLiquidRenderingPostProcess()}_setBlurParameters(e=null){null!==e&&e!==this._depthRenderTarget||this._setBlurDepthParameters(),null!==e&&e!==this._thicknessRenderTarget||this._setBlurThicknessParameters()}_setBlurDepthParameters(){this._depthRenderTarget&&(this._depthRenderTarget.blurFilterSize=this.blurDepthFilterSize,this._depthRenderTarget.blurMaxFilterSize=this.blurDepthMaxFilterSize,this._depthRenderTarget.blurNumIterations=this.blurDepthNumIterations,this._depthRenderTarget.blurDepthScale=this.blurDepthDepthScale)}_setBlurThicknessParameters(){this._thicknessRenderTarget&&(this._thicknessRenderTarget.blurFilterSize=this.blurThicknessFilterSize,this._thicknessRenderTarget.blurNumIterations=this.blurThicknessNumIterations)}_initializeRenderTarget(e){e!==this._diffuseRenderTarget&&(e.enableBlur=e===this._depthRenderTarget?this.enableBlurDepth:this.enableBlurThickness,e.blurSizeDivisor=e===this._depthRenderTarget?this.blurDepthSizeDivisor:this.blurThicknessSizeDivisor),this._setBlurParameters(e),e.initialize()}_createLiquidRenderingPostProcess(){const e=this._scene.getEngine(),t=["viewMatrix","projectionMatrix","invProjectionMatrix","texelSize","dirLight","cameraFar","density","refractionStrength","fresnelClamp","specularPower","surfaceColor"],r=["depthSampler","reflectionSampler"],n=[];if(this.dispose(!0),!this._camera)return;const h=this._depthRenderTarget.enableBlur?this._depthRenderTarget.textureBlur:this._depthRenderTarget.texture,l=new i.Vector2(1/h.getSize().width,1/h.getSize().height);this._diffuseRenderTarget?(r.push("diffuseSampler"),n.push("#define FLUIDRENDERING_DIFFUSETEXTURE")):t.push("diffuseColor"),this._useVelocity&&(r.push("velocitySampler"),n.push("#define FLUIDRENDERING_VELOCITY")),this._useFixedThickness?(t.push("thickness"),r.push("bgDepthSampler"),n.push("#define FLUIDRENDERING_FIXED_THICKNESS")):(t.push("minimumThickness"),r.push("thicknessSampler")),this._debug&&(n.push("#define FLUIDRENDERING_DEBUG"),this._debugFeature===s.Normals?n.push("#define FLUIDRENDERING_DEBUG_SHOWNORMAL"):this._debugFeature===s.DiffuseRendering?n.push("#define FLUIDRENDERING_DEBUG_DIFFUSERENDERING"):(n.push("#define FLUIDRENDERING_DEBUG_TEXTURE"),r.push("debugSampler"),this._debugFeature!==s.DepthTexture&&this._debugFeature!==s.DepthBlurredTexture||n.push("#define FLUIDRENDERING_DEBUG_DEPTH"))),this._renderPostProcess=new i.PostProcess("FluidRendering","renderFluid",t,r,1,null,i.Constants.TEXTURE_BILINEAR_SAMPLINGMODE,e,!1,null,i.Constants.TEXTURETYPE_UNSIGNED_BYTE,void 0,void 0,!0),this._renderPostProcess.updateEffect=function(t=null,r=null,s=null,n,h,l,u,a){this._postProcessDefines=t,this._drawWrapper.effect=this._engine.createEffect({vertex:null!=u?u:this._vertexUrl,fragment:null!=a?a:this._fragmentUrl},["position"],r||this._parameters,s||this._samplers,null!==t?t:"",void 0,h,l,n||this._indexParameters,e.isWebGPU?i.ShaderLanguage.WGSL:i.ShaderLanguage.GLSL)},this._renderPostProcess.updateEffect(n.join("\n")),this._renderPostProcess.samples=this._samples,this._renderPostProcess.onApplyObservable.add((t=>{var r,i,n,h,u,a,d,_,o,T,p,g,c,b,x,R,S,f,D,m,P,E,v;if(this._invProjectionMatrix.copyFrom(this._scene.getProjectionMatrix()),this._invProjectionMatrix.invert(),t.setColor3("surfaceColor",this.surfaceColor),e.isWebGPU&&t.setTextureSampler("textureSamplerSampler",this._renderPostProcess.inputTexture.texture),this._depthRenderTarget.enableBlur?(t.setTexture("depthSampler",this._depthRenderTarget.textureBlur),e.isWebGPU&&t.setTextureSampler("depthSamplerSampler",null!==(h=null===(n=this._depthRenderTarget.textureBlur)||void 0===n?void 0:n.getInternalTexture())&&void 0!==h?h:null)):(t.setTexture("depthSampler",this._depthRenderTarget.texture),e.isWebGPU&&t.setTextureSampler("depthSamplerSampler",null!==(i=null===(r=this._depthRenderTarget.texture)||void 0===r?void 0:r.getInternalTexture())&&void 0!==i?i:null)),this._diffuseRenderTarget?this._diffuseRenderTarget.enableBlur?(t.setTexture("diffuseSampler",this._diffuseRenderTarget.textureBlur),e.isWebGPU&&t.setTextureSampler("diffuseSamplerSampler",null!==(_=null===(d=this._diffuseRenderTarget.textureBlur)||void 0===d?void 0:d.getInternalTexture())&&void 0!==_?_:null)):(t.setTexture("diffuseSampler",this._diffuseRenderTarget.texture),e.isWebGPU&&t.setTextureSampler("diffuseSamplerSampler",null!==(a=null===(u=this._diffuseRenderTarget.texture)||void 0===u?void 0:u.getInternalTexture())&&void 0!==a?a:null)):t.setColor3("diffuseColor",this.fluidColor),this._useFixedThickness?(t.setFloat("thickness",this.minimumThickness),t._bindTexture("bgDepthSampler",this._bgDepthTexture),e.isWebGPU&&t.setTextureSampler("bgDepthSamplerSampler",null!==(o=this._bgDepthTexture)&&void 0!==o?o:null)):(this._thicknessRenderTarget.enableBlur?(t.setTexture("thicknessSampler",this._thicknessRenderTarget.textureBlur),e.isWebGPU&&t.setTextureSampler("thicknessSamplerSampler",null!==(c=null===(g=this._thicknessRenderTarget.textureBlur)||void 0===g?void 0:g.getInternalTexture())&&void 0!==c?c:null)):(t.setTexture("thicknessSampler",this._thicknessRenderTarget.texture),e.isWebGPU&&t.setTextureSampler("thicknessSamplerSampler",null!==(p=null===(T=this._thicknessRenderTarget.texture)||void 0===T?void 0:T.getInternalTexture())&&void 0!==p?p:null)),t.setFloat("minimumThickness",this.minimumThickness)),t.setTexture("reflectionSampler",this._scene.environmentTexture),e.isWebGPU&&t.setTextureSampler("reflectionSamplerSampler",null!==(x=null===(b=this._scene.environmentTexture)||void 0===b?void 0:b.getInternalTexture())&&void 0!==x?x:null),t.setMatrix("viewMatrix",this._scene.getViewMatrix()),t.setMatrix("invProjectionMatrix",this._invProjectionMatrix),t.setMatrix("projectionMatrix",this._scene.getProjectionMatrix()),t.setVector2("texelSize",l),t.setFloat("density",this.density),t.setFloat("refractionStrength",this.refractionStrength),t.setFloat("fresnelClamp",this.fresnelClamp),t.setFloat("specularPower",this.specularPower),t.setVector3("dirLight",this.dirLight),t.setFloat("cameraFar",this._camera.maxZ),this._debug){let r=null;switch(this._debugFeature){case s.DepthTexture:r=this._depthRenderTarget.texture;break;case s.DepthBlurredTexture:r=this._depthRenderTarget.enableBlur?this._depthRenderTarget.textureBlur:this._depthRenderTarget.texture;break;case s.ThicknessTexture:r=null!==(S=null===(R=this._thicknessRenderTarget)||void 0===R?void 0:R.texture)&&void 0!==S?S:null;break;case s.ThicknessBlurredTexture:r=(null===(f=this._thicknessRenderTarget)||void 0===f?void 0:f.enableBlur)?null!==(m=null===(D=this._thicknessRenderTarget)||void 0===D?void 0:D.textureBlur)&&void 0!==m?m:null:null!==(E=null===(P=this._thicknessRenderTarget)||void 0===P?void 0:P.texture)&&void 0!==E?E:null;break;case s.DiffuseTexture:this._diffuseRenderTarget&&(r=this._diffuseRenderTarget.texture)}this._debugFeature!==s.Normals&&(t.setTexture("debugSampler",r),e.isWebGPU&&t.setTextureSampler("debugSamplerSampler",null!==(v=null==r?void 0:r.getInternalTexture())&&void 0!==v?v:null))}}))}clearTargets(){var e,t,r;(null===(e=this._depthRenderTarget)||void 0===e?void 0:e.renderTarget)&&(this._engine.bindFramebuffer(this._depthRenderTarget.renderTarget),this._engine.clear(this._depthClearColor,!0,!0,!1),this._engine.unBindFramebuffer(this._depthRenderTarget.renderTarget)),(null===(t=this._diffuseRenderTarget)||void 0===t?void 0:t.renderTarget)&&(this._engine.bindFramebuffer(this._diffuseRenderTarget.renderTarget),this._engine.clear(this._thicknessClearColor,!0,!0,!1),this._engine.unBindFramebuffer(this._diffuseRenderTarget.renderTarget)),(null===(r=this._thicknessRenderTarget)||void 0===r?void 0:r.renderTarget)&&(this._engine.bindFramebuffer(this._thicknessRenderTarget.renderTarget),this._engine.clear(this._thicknessClearColor,!0,!1,!1),this._engine.unBindFramebuffer(this._thicknessRenderTarget.renderTarget))}render(e){var t,r,s,n,h,l;if(this._needInitialization||!e.isReady())return;const u=this._engine._currentRenderTarget;this._engine.setState(!1,void 0,void 0,void 0,!0),this._engine.setDepthBuffer(!0),this._engine.setDepthWrite(!0),this._engine.setAlphaMode(i.Constants.ALPHA_DISABLE),(null===(t=this._depthRenderTarget)||void 0===t?void 0:t.renderTarget)&&(this._engine.bindFramebuffer(this._depthRenderTarget.renderTarget),e.renderDepthTexture(),this._engine.unbindInstanceAttributes(),this._engine.unBindFramebuffer(this._depthRenderTarget.renderTarget)),(null===(r=this._diffuseRenderTarget)||void 0===r?void 0:r.renderTarget)&&(this._engine.bindFramebuffer(this._diffuseRenderTarget.renderTarget),e.renderDiffuseTexture(),this._engine.unbindInstanceAttributes(),this._engine.unBindFramebuffer(this._diffuseRenderTarget.renderTarget)),(null===(s=this._thicknessRenderTarget)||void 0===s?void 0:s.renderTarget)&&(this._engine.bindFramebuffer(this._thicknessRenderTarget.renderTarget),e.renderThicknessTexture(),this._engine.unbindInstanceAttributes(),this._engine.unBindFramebuffer(this._thicknessRenderTarget.renderTarget)),null===(n=this._depthRenderTarget)||void 0===n||n.applyBlurPostProcesses(),null===(h=this._diffuseRenderTarget)||void 0===h||h.applyBlurPostProcesses(),null===(l=this._thicknessRenderTarget)||void 0===l||l.applyBlurPostProcesses(),u&&this._engine.bindFramebuffer(u)}dispose(e=!1){var t,r,s,i;e||(null===(t=this._depthRenderTarget)||void 0===t||t.dispose(),this._depthRenderTarget=null,null===(r=this._diffuseRenderTarget)||void 0===r||r.dispose(),this._diffuseRenderTarget=null,null===(s=this._thicknessRenderTarget)||void 0===s||s.dispose(),this._thicknessRenderTarget=null),this._renderPostProcess&&this._camera&&this._camera.detachPostProcess(this._renderPostProcess),null===(i=this._renderPostProcess)||void 0===i||i.dispose(),this._renderPostProcess=null,this._needInitialization=!1}}}}]);
//# sourceMappingURL=419.12a34beaf22b32615edd.js.map