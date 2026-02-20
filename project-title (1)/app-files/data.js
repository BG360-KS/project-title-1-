var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance-room",
      "name": "Entrance Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.929933336483222,
          "pitch": -0.06762352247138637,
          "rotation": 0,
          "target": "1-hallway-0"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hallway-0",
      "name": "Hallway 0",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.29251877524185055,
          "pitch": -0.10287001171449539,
          "rotation": 0,
          "target": "0-entrance-room"
        },
        {
          "yaw": -1.619972443095243,
          "pitch": 0.4731527331945671,
          "rotation": 0,
          "target": "2-hallway--1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hallway--1",
      "name": "Hallway -1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4018934631171245,
          "pitch": 0.07936023768502132,
          "rotation": 0,
          "target": "3-basementroom-1"
        },
        {
          "yaw": -2.9491973351477903,
          "pitch": 0.06746856710548244,
          "rotation": 0,
          "target": "4-basement-bathroom"
        },
        {
          "yaw": 2.669863596001748,
          "pitch": 0.1081380574902564,
          "rotation": 0,
          "target": "5-basementroom-2"
        },
        {
          "yaw": 1.4209818353183419,
          "pitch": -0.16845098305674533,
          "rotation": 0,
          "target": "1-hallway-0"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-basementroom-1",
      "name": "Basementroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.22300577828125867,
          "pitch": 0.1383198340384144,
          "rotation": 0,
          "target": "2-hallway--1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-basement-bathroom",
      "name": "Basement Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.16899383509098342,
          "pitch": 0.0960877397830302,
          "rotation": 0,
          "target": "2-hallway--1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-basementroom-2",
      "name": "Basementroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -0.11635528346628554,
        "pitch": -0.015551247797734646,
        "fov": 1.3657196749209477
      },
      "linkHotspots": [
        {
          "yaw": -0.3250271826987685,
          "pitch": 0.12758070978035008,
          "rotation": 0,
          "target": "2-hallway--1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
