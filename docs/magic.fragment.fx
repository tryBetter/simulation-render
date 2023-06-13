precision highp float;
varying float vDistort;

uniform float uRed;
uniform float uBlue;

vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}

        void main() {
          float distort = vDistort * 1.; // * X.X intensity

  vec3 brightness = vec3(uRed, 0.3, uBlue);
  vec3 contrast = vec3(0.1, 0.2, 0.1);
  vec3 oscilation = vec3(1.2, 1.2, 1.2);
  vec3 phase = vec3(0.0, 0.0, 0.0);

    // Pass the distortion as input of cospalette
  vec3 color = cosPalette(distort, brightness, contrast, oscilation, phase);
            gl_FragColor = vec4(color,1.);
        }