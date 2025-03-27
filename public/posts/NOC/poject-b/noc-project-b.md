---
title: Project B - Live Music Visualization
publishedAt: 2025-03-18
summary: Summary of ths post
type: article
pin: true
tags:
  - coding
createdAt: 2024-05-01
updatedAt: 2024-05-12
---
# Elevator Pitch

This project explored the possibilities of live music visualization, utilizing Unity and Nature of Code algorithms. 

### [Project Demonstration Video](https://drive.google.com/file/d/17doxLZC76v2Ad-uEK-_qtWwUcS1St1zo/view?usp=drive_link)

![DSCF4259.JPG](Project%20B%20-%20Live%20Music%20Visualization%2000a591152d07417dbb65491e2cbb7fd5/DSCF4259.jpg)
# Highlights

![截屏2024-05-12 15.22.45.png](Project%20B%20-%20Live%20Music%20Visualization%2000a591152d07417dbb65491e2cbb7fd5/%25E6%2588%25AA%25E5%25B1%258F2024-05-12_15.22.45.png)

![截屏2024-05-12 15.23.05.png](Project%20B%20-%20Live%20Music%20Visualization%2000a591152d07417dbb65491e2cbb7fd5/%25E6%2588%25AA%25E5%25B1%258F2024-05-12_15.23.05.png)

![截屏2024-05-12 15.24.14.png](Project%20B%20-%20Live%20Music%20Visualization%2000a591152d07417dbb65491e2cbb7fd5/%25E6%2588%25AA%25E5%25B1%258F2024-05-12_15.24.14.png)

![截屏2024-05-12 15.23.18.png](Project%20B%20-%20Live%20Music%20Visualization%2000a591152d07417dbb65491e2cbb7fd5/%25E6%2588%25AA%25E5%25B1%258F2024-05-12_15.23.18.png)

![截屏2024-05-12 15.23.32.png](Project%20B%20-%20Live%20Music%20Visualization%2000a591152d07417dbb65491e2cbb7fd5/%25E6%2588%25AA%25E5%25B1%258F2024-05-12_15.23.32.png)

In this project, I explored 5 different kinds of visualizations. Each of them have different interactions with the live music I played.

# Working Process

In order to analyze audio signal, I dig into FFT algorithm:

[Audio Visualization - Unity/C# Tutorial [Part 1 - FFT/Spectrum Theory]](https://www.youtube.com/watch?v=4Av788P9stk)

For peak detection, I found some open source code and merged it into my project:

[GameDev.net -- Beat Detection Algorithms](https://archive.gamedev.net/archive/reference/programming/features/beatdetection/index.html)

[https://github.com/HRK-Game-Portfolio/MeloDash/blob/master/Assets/Scripts/BeatDetection.cs](https://github.com/HRK-Game-Portfolio/MeloDash/blob/master/Assets/Scripts/BeatDetection.cs)

How to use microphone in Unity:

[Microphone Input Visuals - Unity/C# Tutorial [Part 1 - Get Microphone Devices]](https://www.youtube.com/watch?v=GHc9RF258VA)

Working Screen Shots:

Early stage effects:

![Untitled](Project%20B%20-%20Live%20Music%20Visualization%2000a591152d07417dbb65491e2cbb7fd5/Untitled.png)

![截屏2024-05-02 10.14.51.png](Project%20B%20-%20Live%20Music%20Visualization%2000a591152d07417dbb65491e2cbb7fd5/%25E6%2588%25AA%25E5%25B1%258F2024-05-02_10.14.51.png)

Music Interface:

![截屏2024-05-12 15.33.37.png](Project%20B%20-%20Live%20Music%20Visualization%2000a591152d07417dbb65491e2cbb7fd5/%25E6%2588%25AA%25E5%25B1%258F2024-05-12_15.33.37.png)

Unity Interface:

![截屏2024-05-12 15.36.17.png](Project%20B%20-%20Live%20Music%20Visualization%2000a591152d07417dbb65491e2cbb7fd5/%25E6%2588%25AA%25E5%25B1%258F2024-05-12_15.36.17.png)

# Key Techniques

## The recursive tree algorithm in 3D space

- 3D Tree algorithm
    
    ```csharp
    using System.Collections;
    using System.Collections.Generic;
    using UnityEngine;
    
    public class GenerateTree : MonoBehaviour
    {
        public GameObject linePrefab, FruitPrefab;
    
        private GameObject[] Lines = new GameObject[1024];
        private GameObject[] Fruits = new GameObject[1024];
        private int lineCount = 0, fruitCount = 0;
    
        // Start is called before the first frame update
        void Start()
        {
            for (int i = 0; i < 1024; i++)
            {
                GameObject tempObj = Instantiate(linePrefab);
                tempObj.SetActive(false);
                tempObj.transform.position = this.transform.position;
                tempObj.transform.parent = this.transform;
                tempObj.name = "Line_" + i;
                Lines[i] = tempObj; 
            }
            for(int i = 0; i < 1024; i++)
            {
                GameObject tempObj = Instantiate(FruitPrefab);
                tempObj.SetActive(false);
                tempObj.transform.position = this.transform.position;
                tempObj.transform.parent = this.transform;
                tempObj.name = "Fruit_" + i;
                Fruits[i] = tempObj;
            }
    
            Generate();
        }
    
        private void Branch(float x, float y, float z, float len, float angle, float width)
        {
            float rad;
            float randomAngle;
            if (lineCount == 0)
            {
                rad = 0;
                randomAngle = 0f;
            }
            else
            {
                rad = Mathf.Cos(angle * Mathf.Deg2Rad) * len;
                randomAngle = Random.Range(0, 360);
            }
      
            float targetX = x + Mathf.Cos(randomAngle * Mathf.Deg2Rad) * rad;
            float targetZ = z + Mathf.Sin(randomAngle * Mathf.Deg2Rad) * rad;
            float targetY = y + Mathf.Sin(angle * Mathf.Deg2Rad) * len;
    
            var points = new Vector3[2];
            points[0] = new Vector3(x, y, z);
            points[1] = new Vector3(targetX, targetY, targetZ);
            Lines[lineCount].GetComponent<LineRenderer>().SetPositions(points);
            Lines[lineCount].GetComponent<LineRenderer>().SetWidth(width, width);
            Lines[lineCount].SetActive(true);
            lineCount += 1;
    
            float addAngle = 20;
    
            // EXIT CONDITION
            len *= 0.75f;
    
            if (len < 0.8)
            {
                Fruits[fruitCount].transform.localPosition = points[1];
                Fruits[fruitCount].SetActive(true);
                fruitCount += 1;
            }
    
            if (len > 0.5)
            {
                Branch(targetX, targetY, targetZ, len, (angle - addAngle - Random.Range(-1, 1) * 30), width * 0.75f);
                Branch(targetX, targetY, targetZ, len, (angle - addAngle - Random.Range(-1, 1) * 30), width * 0.75f);
            }
        }
    
        private void Reset()
        {
            lineCount = 0;
            fruitCount = 0;
            for (int i = 0; i < 1024; i++)
            {
                Lines[i].SetActive(false);
            }
            for (int i = 0; i < 256; i++)
            {
                Fruits[i].SetActive(false);
            }
        }
    
        public void Generate()
        {
            Reset();
            Branch(0, 0, 0, 5, 60, 0.3f); 
        }
    }
    
    ```
    

## Audio Chain Management

[BlackHole: Route Audio Between Apps](https://existential.audio/blackhole/)

![截屏2024-05-12 17.29.08.png](Project%20B%20-%20Live%20Music%20Visualization%2000a591152d07417dbb65491e2cbb7fd5/%25E6%2588%25AA%25E5%25B1%258F2024-05-12_17.29.08.png)

Utilizing BlackHole makes creating virtual audio channel possible. I can easily create virtue devices to distribute audio signal to different applications. In this project, audio signal is from Ableton, and distribute to Unity and 3.5mm audio output respectively.

# IMA Show Pics

![DSCF4160.JPG](Project%20B%20-%20Live%20Music%20Visualization%2000a591152d07417dbb65491e2cbb7fd5/DSCF4160.jpg)

![DSCF4181.JPG](Project%20B%20-%20Live%20Music%20Visualization%2000a591152d07417dbb65491e2cbb7fd5/DSCF4181.jpg)

![DSCF4329.JPG](Project%20B%20-%20Live%20Music%20Visualization%2000a591152d07417dbb65491e2cbb7fd5/DSCF4329.jpg)

![DSCF4189.JPG](Project%20B%20-%20Live%20Music%20Visualization%2000a591152d07417dbb65491e2cbb7fd5/DSCF4189.jpg)

![DSCF4196.JPG](Project%20B%20-%20Live%20Music%20Visualization%2000a591152d07417dbb65491e2cbb7fd5/DSCF4196.jpg)

![DSCF4229.JPG](Project%20B%20-%20Live%20Music%20Visualization%2000a591152d07417dbb65491e2cbb7fd5/DSCF4229.jpg)

![DSCF4259.JPG](Project%20B%20-%20Live%20Music%20Visualization%2000a591152d07417dbb65491e2cbb7fd5/DSCF4259.jpg)

# **Reflection and Future Developments**

In this project, I explored live music visualization, FFT analysis, and transferring Nature of Code skill into unity. Compare to p5js, unity has its strength, but it also has its shortcomings. For example, it doesn’t provide the basic function to draw a line, and it doesn’t provide transparent background function (unity doesn’t work this way), which makes drawing trace more complex than p5js. On the hand, unity provides us with some useful function, like animation, timeline, cinemachine, collision, which let me focus more on the creative part instead of spending to much time reinvent the wheels (but I admit it is fun to do so in p5js, so I lost some fun).

For future developments, I think there are still a lot I can do. Due to the time limitation of this final project, I didn’t figure out all the things I wanted to do. The beat detection is not stable enough and music didn’t fit the scene well. I think this part still need time to explore.

And as the professor from Tongji university said, transition between different scenes now is not smooth enough now. They are not connected, they are actually quite separated. For future development, I may think of the smooth transition between different scenes.