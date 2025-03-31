# Project A - Purest

"Project A - Purest" is about blending music with visuals using a MIDI keyboard. It started simple and grew to include 3D images and camera movements that change on their own. This project shows how combining music and visuals can create something beautiful and complex, reflecting a journey of learning and creativity.

# Demonstration Video

[https://drive.google.com/file/d/1-b0LUPPUuNcDjZHStZiOFLd5KrGDZKWr/view?usp=drive_link](https://drive.google.com/file/d/1-b0LUPPUuNcDjZHStZiOFLd5KrGDZKWr/view?usp=drive_link)

### Inspiration

[Processing music visualizer – music grid](https://www.youtube.com/watch?v=VOHYuH8qYiU)

[p5.js - Controlling parameters using AKAI MPK mini MIDI keyboard](https://www.youtube.com/watch?v=xKSOJKj-ILU)

# Coding Process

### Reference

[p5.js Web Editor](https://editor.p5js.org/mrbombmusic/sketches/AHwJyjCaH)

[Quick Start For v3.x | WEBMIDI.js](https://webmidijs.org/docs/)

Version 1: [https://editor.p5js.org/WangZhewei1027/sketches/Gb9e2lImj](https://editor.p5js.org/WangZhewei1027/sketches/Gb9e2lImj)

Version 2: [https://editor.p5js.org/WangZhewei1027/sketches/zwGHNrrEW](https://editor.p5js.org/WangZhewei1027/sketches/zwGHNrrEW)

Version 3: [https://editor.p5js.org/WangZhewei1027/sketches/hCjiryVwo](https://editor.p5js.org/WangZhewei1027/sketches/hCjiryVwo)

The first three version I learn how to use midi keyboard to control parameters.

Version 4: [https://editor.p5js.org/WangZhewei1027/sketches/NcR_Ff1zi](https://editor.p5js.org/WangZhewei1027/sketches/NcR_Ff1zi)

[录屏2024-03-16 15.22.36.mov](Project%20A%20-%20Purest%2095b578434f3d4afaa3ada4eb38400c01/%25E5%25BD%2595%25E5%25B1%258F2024-03-16_15.22.36.mov)

Version 5: [https://editor.p5js.org/WangZhewei1027/sketches/FOOB96XWt](https://editor.p5js.org/WangZhewei1027/sketches/FOOB96XWt)

[录屏2024-03-16 19.49.24.mov](Project%20A%20-%20Purest%2095b578434f3d4afaa3ada4eb38400c01/%25E5%25BD%2595%25E5%25B1%258F2024-03-16_19.49.24.mov)

[录屏2024-03-16 16.31.50.mov](Project%20A%20-%20Purest%2095b578434f3d4afaa3ada4eb38400c01/%25E5%25BD%2595%25E5%25B1%258F2024-03-16_16.31.50.mov)

In order to have the strength control of keys, as well as the global volume, I write this code:

```jsx
  update() {
    this.osc.pan(newPan);
    this.osc.amp(map(this.a, 0, 1, 0, globalAmp));
    if (on == 128 && channel == this.ch) {
      this.osc.fade(0, 0.1);
      this.isDelete = true;
    }
  }
```

Version 6: Start to develop locally

As the code the is growing longer, I need VS Code to help handle all the codes.

[录屏2024-03-16 16.31.50.mov](Project%20A%20-%20Purest%2095b578434f3d4afaa3ada4eb38400c01/%25E5%25BD%2595%25E5%25B1%258F2024-03-16_16.31.50%201.mov)

Version 8:

Firgured out how to control a camera. It requires 6 parameters and need to be update every frame.

```jsx
cam.camera(250, 250, 443.01270189221935, 250, 250, 10, 0, 1, 0);
```

# Presentation Organization

2D:

single note

multiple notes

pan

volume

auto pan

auto volum

ARPEGGIATOR

3D:

play with density

play with drum beat

play music

moving perspective automactically

play between 2D/3D

# Reflection

I this project the explore the music visualization and the connection between p5js and midi keyboard. For reflection and further development, I think there are sill lots I can do. In the 3D perspective, there are still many potentials. I may explore how to make tider connection between music and its visualization, and make it into a programmed performance.