"use strict";(self.webpackChunkbabylonjs_fluid_rendering=self.webpackChunkbabylonjs_fluid_rendering||[]).push([[247],{247:(e,t,s)=>{s.r(t),s.d(t,{CopyDepthTexture:()=>i});var r=s(6291);class i{constructor(e,t,s){this._vertexBuffers={},this._engine=e,this._width=t,this._height=s,this._depthRTWrapper=this._engine.createRenderTargetTexture({width:t,height:s},{generateMipMaps:!1,type:r.Constants.TEXTURETYPE_UNSIGNED_BYTE,format:r.Constants.TEXTUREFORMAT_R,samplingMode:r.Constants.TEXTURE_NEAREST_SAMPLINGMODE,generateDepthBuffer:!0,generateStencilBuffer:!1,samples:1,noColorTarget:!0}),this._depthRTWrapper.createDepthStencilTexture(0,!1,!1,1),this._copyEffectWrapper=new r.EffectWrapper({engine:this._engine,useShaderStore:!0,vertexShader:"passDepth",fragmentShader:"passDepth",attributeNames:["position"],uniformNames:[],samplerNames:["textureDepth"],shaderLanguage:e.isWebGPU?r.ShaderLanguage.WGSL:r.ShaderLanguage.GLSL});const i=[];i.push(1,1),i.push(-1,1),i.push(-1,-1),i.push(1,-1),this._vertexBuffers[r.VertexBuffer.PositionKind]=new r.VertexBuffer(this._engine,i,r.VertexBuffer.PositionKind,!1,!1,2);const n=[];n.push(0),n.push(1),n.push(2),n.push(0),n.push(2),n.push(3),this._indexBuffer=this._engine.createIndexBuffer(n)}get depthRTWrapper(){return this._depthRTWrapper}copy(e){const t=this._copyEffectWrapper.effect;if(!t.isReady())return!1;this._engine.bindFramebuffer(this._depthRTWrapper),this._engine.enableEffect(this._copyEffectWrapper._drawWrapper);const s=this._engine.getDepthFunction();return this._engine.setState(!1),this._engine.setDepthBuffer(!0),this._engine.setDepthWrite(!0),this._engine.setDepthFunction(r.Constants.ALWAYS),this._engine.setColorWrite(!1),this._engine.bindBuffers(this._vertexBuffers,this._indexBuffer,t),t._bindTexture("textureDepth",e),this._engine.drawElementsType(r.Constants.MATERIAL_TriangleFillMode,0,6),this._engine.setDepthFunction(s),this._engine.setColorWrite(!0),this._engine.unBindFramebuffer(this._depthRTWrapper),!0}dispose(){var e;this._depthRTWrapper.dispose(),null===(e=this._vertexBuffers[r.VertexBuffer.PositionKind])||void 0===e||e.dispose(),this._vertexBuffers={},this._indexBuffer&&(this._engine._releaseBuffer(this._indexBuffer),this._indexBuffer=null)}}}}]);
//# sourceMappingURL=247.694ca9a16fa7320c975f.js.map