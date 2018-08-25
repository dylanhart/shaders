// Author:
// Title:

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy - vec2(.5);
    st.x *= u_resolution.x/u_resolution.y;

    float r = length(st);
    float a = atan(st.y, st.x);

    float warp = sin(r*30. + sin(u_time * 4.) * 2.);
    st += st * pow(r, .3 + warp * .1);

    #define SQUARES 4.
    float check = (step(.5, fract((st.x) * SQUARES)) != step(.5, fract(st.y * SQUARES))) ? 1. : 0.;

    vec3 color = vec3(check);

    gl_FragColor = vec4(color,1.0);
}