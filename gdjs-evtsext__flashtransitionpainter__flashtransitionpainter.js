
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter || {};

/**
 * Behavior generated from Flash and transition painter
 */
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter = class FlashTransitionPainter extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Progress = Number("0") || 0;
    this._behaviorData.Duration = Number("0") || 0;
    this._behaviorData.Type = "";
    this._behaviorData.Direction = "";
    this._behaviorData.MaxOpacity = Number("255") || 0;
    this._behaviorData.Index = Number("0") || 0;
    this._behaviorData.Value = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Progress !== newBehaviorData.Progress)
      this._behaviorData.Progress = newBehaviorData.Progress;
    if (oldBehaviorData.Duration !== newBehaviorData.Duration)
      this._behaviorData.Duration = newBehaviorData.Duration;
    if (oldBehaviorData.Type !== newBehaviorData.Type)
      this._behaviorData.Type = newBehaviorData.Type;
    if (oldBehaviorData.Direction !== newBehaviorData.Direction)
      this._behaviorData.Direction = newBehaviorData.Direction;
    if (oldBehaviorData.MaxOpacity !== newBehaviorData.MaxOpacity)
      this._behaviorData.MaxOpacity = newBehaviorData.MaxOpacity;
    if (oldBehaviorData.Index !== newBehaviorData.Index)
      this._behaviorData.Index = newBehaviorData.Index;
    if (oldBehaviorData.Value !== newBehaviorData.Value)
      this._behaviorData.Value = newBehaviorData.Value;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Progress: this._behaviorData.Progress,
    Duration: this._behaviorData.Duration,
    Type: this._behaviorData.Type,
    Direction: this._behaviorData.Direction,
    MaxOpacity: this._behaviorData.MaxOpacity,
    Index: this._behaviorData.Index,
    Value: this._behaviorData.Value,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Progress !== undefined)
      this._behaviorData.Progress = networkSyncData.props.Progress;
    if (networkSyncData.props.Duration !== undefined)
      this._behaviorData.Duration = networkSyncData.props.Duration;
    if (networkSyncData.props.Type !== undefined)
      this._behaviorData.Type = networkSyncData.props.Type;
    if (networkSyncData.props.Direction !== undefined)
      this._behaviorData.Direction = networkSyncData.props.Direction;
    if (networkSyncData.props.MaxOpacity !== undefined)
      this._behaviorData.MaxOpacity = networkSyncData.props.MaxOpacity;
    if (networkSyncData.props.Index !== undefined)
      this._behaviorData.Index = networkSyncData.props.Index;
    if (networkSyncData.props.Value !== undefined)
      this._behaviorData.Value = networkSyncData.props.Value;
  }

  // Properties:
  
  _getProgress() {
    return this._behaviorData.Progress !== undefined ? this._behaviorData.Progress : Number("0") || 0;
  }
  _setProgress(newValue) {
    this._behaviorData.Progress = newValue;
  }
  _getDuration() {
    return this._behaviorData.Duration !== undefined ? this._behaviorData.Duration : Number("0") || 0;
  }
  _setDuration(newValue) {
    this._behaviorData.Duration = newValue;
  }
  _getType() {
    return this._behaviorData.Type !== undefined ? this._behaviorData.Type : "";
  }
  _setType(newValue) {
    this._behaviorData.Type = newValue;
  }
  _getDirection() {
    return this._behaviorData.Direction !== undefined ? this._behaviorData.Direction : "";
  }
  _setDirection(newValue) {
    this._behaviorData.Direction = newValue;
  }
  _getMaxOpacity() {
    return this._behaviorData.MaxOpacity !== undefined ? this._behaviorData.MaxOpacity : Number("255") || 0;
  }
  _setMaxOpacity(newValue) {
    this._behaviorData.MaxOpacity = newValue;
  }
  _getIndex() {
    return this._behaviorData.Index !== undefined ? this._behaviorData.Index : Number("0") || 0;
  }
  _setIndex(newValue) {
    this._behaviorData.Index = newValue;
  }
  _getValue() {
    return this._behaviorData.Value !== undefined ? this._behaviorData.Value : Number("0") || 0;
  }
  _setValue(newValue) {
    this._behaviorData.Value = newValue;
  }
}

/**
 * Shared data generated from Flash and transition painter
 */
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.SharedData = class FlashTransitionPainterSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._FlashTransitionPainter_FlashTransitionPainterSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._FlashTransitionPainter_FlashTransitionPainterSharedData = new gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.SharedData(
      initialData
    );
  }
  return instanceContainer._FlashTransitionPainter_FlashTransitionPainterSharedData;
}

// Methods:
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext = {};
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.GDObjectObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("Behavior"), false);
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setType("Flash");
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMaxOpacity(255);
}
}}

}


};

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FlashTransitionPainter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FlashTransitionPainter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getType() == "Flash" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillOpacity(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxOpacity() * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgress());
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawRectangle(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getLayer()), 0), gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getLayer()), 0), gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getLayer()), 0), gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getLayer()), 0));
}
}}

}


};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


const repeatCount3 = 5;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3[i].setFillOpacity(51 * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex());
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3[i].drawRectangle(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3[i].getLayer()), 0), gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3[i].getLayer()), 0), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValue() - 2 * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex(), gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3[i].getLayer()), 0));
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIndex(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex() + (1));
}
}}
}

}


};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getType() == "Horizontal" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setValue(gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getLayer()), 0), gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getLayer()), 0) + 10, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgress()));
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIndex(0);
}
}
{ //Subevents
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{



}


{


const repeatCount3 = 5;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3[i].setFillOpacity(51 * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex());
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3[i].drawRectangle(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3[i].getLayer()), 0), gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3[i].getLayer()), 0), gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3[i].getLayer()), 0), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValue() - 2 * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex());
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIndex(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex() + (1));
}
}}
}

}


};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getType() == "Vertical" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setValue(gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getLayer()), 0), gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getLayer()), 0) + 10, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgress()));
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIndex(0);
}
}
{ //Subevents
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{



}


{


const repeatCount2 = 5;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillOpacity(51 * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex());
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawCircle(gdjs.evtTools.camera.getCameraX(runtimeScene, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getLayer()), 0), gdjs.evtTools.camera.getCameraY(runtimeScene, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getLayer()), 0), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValue() - 0.2 * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex());
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIndex(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIndex() + (1));
}
}}
}

}


};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{



}


{

/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getType() == "Circular" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setValue((gdjs.evtTools.common.distanceBetweenPositions(0, 0, gdjs.evtTools.camera.getCameraWidth(runtimeScene, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getLayer()), 0), gdjs.evtTools.camera.getCameraHeight(runtimeScene, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getLayer()), 0)) / 2 + 1) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgress());
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIndex(0);
}
}
{ //Subevents
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList6(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList9(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17689900);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].setClearBetweenFrames(false);
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].setOutlineSize(0);
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].setCoordinatesRelative(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgress(Math.min(1, (gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSeconds("__FlashTransitionPainter_Time")) / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()));
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].clear();
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgress() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("Behavior"), false);
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].pauseTimer("__FlashTransitionPainter_Time");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection() == "Backward" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgress(1 - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgress());
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirection() == "Both" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgress(Math.min(2 * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgress(), 2 * (1 - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgress())));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getProgress() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FlashTransitionPainter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FlashTransitionPainter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.eventsList11(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext = {};
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1= [];
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2= [];
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects3= [];


gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Type") : "") != "");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setType(eventsFunctionContext.getArgument("Type"));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : "") != "");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1, gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2[i].setFillColor(eventsFunctionContext.getArgument("Color"));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("MaxOpacity")) || 0 : 0) != 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMaxOpacity(eventsFunctionContext.getArgument("MaxOpacity"));
}
}}

}


};gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1[i].behaviorActivated(eventsFunctionContext.getBehaviorName("Behavior"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("Behavior"), true);
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1[i].unpauseTimer("__FlashTransitionPainter_Time");
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1[i].resetTimer("__FlashTransitionPainter_Time");
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDuration(eventsFunctionContext.getArgument("Duration"));
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDirection(eventsFunctionContext.getArgument("Direction"));
}
}{for(var i = 0, len = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setProgress(0);
}
}
{ //Subevents
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffect = function(Color, Duration, Type, Direction, MaxOpacity, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FlashTransitionPainter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FlashTransitionPainter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Color") return Color;
if (argName === "Duration") return Duration;
if (argName === "Type") return Type;
if (argName === "Direction") return Direction;
if (argName === "MaxOpacity") return MaxOpacity;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext = {};
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects1= [];
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects2= [];


gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects1[i].timerPaused("__FlashTransitionPainter_Time") ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects1[k] = gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEnd = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FlashTransitionPainter"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FlashTransitionPainter"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.PaintEffectIsEndContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("FlashTransitionPainter::FlashTransitionPainter", gdjs.evtsExt__FlashTransitionPainter__FlashTransitionPainter.FlashTransitionPainter);
