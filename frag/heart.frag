// Author:
// Title:

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;
    
    st -= vec2(u_resolution.x/u_resolution.y/2., .7);

    float r = length(st);
    float a = atan(st.x, st.y);
    
    vec3 color = vec3(0.);
    
    float x = abs(a/3.14159);
    
    float curve = pow(x, .6+pow(x, x*3.)) * .5;
    
    color.r = 1.;
	float fade = fract((r - curve ) * 15. - fract(u_time)) * .3;
    color.b = (r >= curve) ? 1.-fade : 0.3 ;
    color.g = (r >= curve) ? 1.-fade : 0.3 ;
    

    gl_FragColor = vec4(color,1.0);
}