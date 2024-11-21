gdjs.EndCode = {};
gdjs.EndCode.localVariables = [];
gdjs.EndCode.GDLoseObjects1= [];
gdjs.EndCode.GDLoseObjects2= [];
gdjs.EndCode.GDTry_9595AgainObjects1= [];
gdjs.EndCode.GDTry_9595AgainObjects2= [];
gdjs.EndCode.GDNewSprite2Objects1= [];
gdjs.EndCode.GDNewSprite2Objects2= [];
gdjs.EndCode.GDFloorObjects1= [];
gdjs.EndCode.GDFloorObjects2= [];
gdjs.EndCode.GDNewSpriteObjects1= [];
gdjs.EndCode.GDNewSpriteObjects2= [];
gdjs.EndCode.GDdialoguetxtObjects1= [];
gdjs.EndCode.GDdialoguetxtObjects2= [];
gdjs.EndCode.GDName_9595TxtObjects1= [];
gdjs.EndCode.GDName_9595TxtObjects2= [];
gdjs.EndCode.GDdialogueObjects1= [];
gdjs.EndCode.GDdialogueObjects2= [];
gdjs.EndCode.GDnameObjects1= [];
gdjs.EndCode.GDnameObjects2= [];
gdjs.EndCode.GDNewSprite4Objects1= [];
gdjs.EndCode.GDNewSprite4Objects2= [];
gdjs.EndCode.GDNewSprite5Objects1= [];
gdjs.EndCode.GDNewSprite5Objects2= [];
gdjs.EndCode.GDShotTrailObjects1= [];
gdjs.EndCode.GDShotTrailObjects2= [];
gdjs.EndCode.GDTransitionObjects1= [];
gdjs.EndCode.GDTransitionObjects2= [];
gdjs.EndCode.GDname2Objects1= [];
gdjs.EndCode.GDname2Objects2= [];
gdjs.EndCode.GDMarkerObjects1= [];
gdjs.EndCode.GDMarkerObjects2= [];
gdjs.EndCode.GDSettingsMarkerObjects1= [];
gdjs.EndCode.GDSettingsMarkerObjects2= [];
gdjs.EndCode.GDbackObjects1= [];
gdjs.EndCode.GDbackObjects2= [];
gdjs.EndCode.GDback2Objects1= [];
gdjs.EndCode.GDback2Objects2= [];
gdjs.EndCode.GDYourObjects1= [];
gdjs.EndCode.GDYourObjects2= [];
gdjs.EndCode.GDNewSprite6Objects1= [];
gdjs.EndCode.GDNewSprite6Objects2= [];
gdjs.EndCode.GDAvatarObjects1= [];
gdjs.EndCode.GDAvatarObjects2= [];
gdjs.EndCode.GDTransition2Objects1= [];
gdjs.EndCode.GDTransition2Objects2= [];
gdjs.EndCode.GDTargetObjects1= [];
gdjs.EndCode.GDTargetObjects2= [];
gdjs.EndCode.GDTransition3Objects1= [];
gdjs.EndCode.GDTransition3Objects2= [];
gdjs.EndCode.GDYour2Objects1= [];
gdjs.EndCode.GDYour2Objects2= [];
gdjs.EndCode.GDTransition4Objects1= [];
gdjs.EndCode.GDTransition4Objects2= [];
gdjs.EndCode.GDMCObjects1= [];
gdjs.EndCode.GDMCObjects2= [];
gdjs.EndCode.GDWallCollisionObjects1= [];
gdjs.EndCode.GDWallCollisionObjects2= [];
gdjs.EndCode.GDInteractObjects1= [];
gdjs.EndCode.GDInteractObjects2= [];
gdjs.EndCode.GDMCrilObjects1= [];
gdjs.EndCode.GDMCrilObjects2= [];
gdjs.EndCode.GD_9595DoctorObjects1= [];
gdjs.EndCode.GD_9595DoctorObjects2= [];
gdjs.EndCode.GDMcNameObjects1= [];
gdjs.EndCode.GDMcNameObjects2= [];
gdjs.EndCode.GDNameGameObjects1= [];
gdjs.EndCode.GDNameGameObjects2= [];
gdjs.EndCode.GDWho_9595IsObjects1= [];
gdjs.EndCode.GDWho_9595IsObjects2= [];
gdjs.EndCode.GDDialogue3Objects1= [];
gdjs.EndCode.GDDialogue3Objects2= [];
gdjs.EndCode.GDOption_9595BoxObjects1= [];
gdjs.EndCode.GDOption_9595BoxObjects2= [];
gdjs.EndCode.GDoptiontxtObjects1= [];
gdjs.EndCode.GDoptiontxtObjects2= [];
gdjs.EndCode.GDNewSprite7Objects1= [];
gdjs.EndCode.GDNewSprite7Objects2= [];
gdjs.EndCode.GDYour3Objects1= [];
gdjs.EndCode.GDYour3Objects2= [];
gdjs.EndCode.GDTHanksObjects1= [];
gdjs.EndCode.GDTHanksObjects2= [];
gdjs.EndCode.GDdontObjects1= [];
gdjs.EndCode.GDdontObjects2= [];
gdjs.EndCode.GDlinkObjects1= [];
gdjs.EndCode.GDlinkObjects2= [];
gdjs.EndCode.GDSettingsMarker2Objects1= [];
gdjs.EndCode.GDSettingsMarker2Objects2= [];
gdjs.EndCode.GDMovementObjects1= [];
gdjs.EndCode.GDMovementObjects2= [];
gdjs.EndCode.GDMarker2Objects1= [];
gdjs.EndCode.GDMarker2Objects2= [];


gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.EndCode.GDMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.EndCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Transition2"), gdjs.EndCode.GDTransition2Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.EndCode.GDNewSprite2Objects1.length !== 0 ? gdjs.EndCode.GDNewSprite2Objects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.EndCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.EndCode.GDNewSprite2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.EndCode.GDTransition2Objects1.length ;i < len;++i) {
    gdjs.EndCode.GDTransition2Objects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "violin-lose-4-185125.mp3", 1, false, 100, 1);
}{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "CameraMove", (( gdjs.EndCode.GDMarkerObjects1.length === 0 ) ? 0 :gdjs.EndCode.GDMarkerObjects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "easeInQuad", 1);
}{for(var i = 0, len = gdjs.EndCode.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDMarkerObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Try_Again"), gdjs.EndCode.GDTry_9595AgainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EndCode.GDTry_9595AgainObjects1.length;i<l;++i) {
    if ( !(gdjs.EndCode.GDTry_9595AgainObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.EndCode.GDTry_9595AgainObjects1[k] = gdjs.EndCode.GDTry_9595AgainObjects1[i];
        ++k;
    }
}
gdjs.EndCode.GDTry_9595AgainObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.EndCode.GDTry_9595AgainObjects1 */
{for(var i = 0, len = gdjs.EndCode.GDTry_9595AgainObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDTry_9595AgainObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Try_Again"), gdjs.EndCode.GDTry_9595AgainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EndCode.GDTry_9595AgainObjects1.length;i<l;++i) {
    if ( gdjs.EndCode.GDTry_9595AgainObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.EndCode.GDTry_9595AgainObjects1[k] = gdjs.EndCode.GDTry_9595AgainObjects1[i];
        ++k;
    }
}
gdjs.EndCode.GDTry_9595AgainObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.EndCode.GDTry_9595AgainObjects1 */
{for(var i = 0, len = gdjs.EndCode.GDTry_9595AgainObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDTry_9595AgainObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Try_Again"), gdjs.EndCode.GDTry_9595AgainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EndCode.GDTry_9595AgainObjects1.length;i<l;++i) {
    if ( gdjs.EndCode.GDTry_9595AgainObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.EndCode.GDTry_9595AgainObjects1[k] = gdjs.EndCode.GDTry_9595AgainObjects1[i];
        ++k;
    }
}
gdjs.EndCode.GDTry_9595AgainObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.EndCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.EndCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.EndCode.GDTransitionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EndCode.GDTransitionObjects1.length;i<l;++i) {
    if ( gdjs.EndCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.EndCode.GDTransitionObjects1[k] = gdjs.EndCode.GDTransitionObjects1[i];
        ++k;
    }
}
gdjs.EndCode.GDTransitionObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game nya", false);
}}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDLoseObjects1.length = 0;
gdjs.EndCode.GDLoseObjects2.length = 0;
gdjs.EndCode.GDTry_9595AgainObjects1.length = 0;
gdjs.EndCode.GDTry_9595AgainObjects2.length = 0;
gdjs.EndCode.GDNewSprite2Objects1.length = 0;
gdjs.EndCode.GDNewSprite2Objects2.length = 0;
gdjs.EndCode.GDFloorObjects1.length = 0;
gdjs.EndCode.GDFloorObjects2.length = 0;
gdjs.EndCode.GDNewSpriteObjects1.length = 0;
gdjs.EndCode.GDNewSpriteObjects2.length = 0;
gdjs.EndCode.GDdialoguetxtObjects1.length = 0;
gdjs.EndCode.GDdialoguetxtObjects2.length = 0;
gdjs.EndCode.GDName_9595TxtObjects1.length = 0;
gdjs.EndCode.GDName_9595TxtObjects2.length = 0;
gdjs.EndCode.GDdialogueObjects1.length = 0;
gdjs.EndCode.GDdialogueObjects2.length = 0;
gdjs.EndCode.GDnameObjects1.length = 0;
gdjs.EndCode.GDnameObjects2.length = 0;
gdjs.EndCode.GDNewSprite4Objects1.length = 0;
gdjs.EndCode.GDNewSprite4Objects2.length = 0;
gdjs.EndCode.GDNewSprite5Objects1.length = 0;
gdjs.EndCode.GDNewSprite5Objects2.length = 0;
gdjs.EndCode.GDShotTrailObjects1.length = 0;
gdjs.EndCode.GDShotTrailObjects2.length = 0;
gdjs.EndCode.GDTransitionObjects1.length = 0;
gdjs.EndCode.GDTransitionObjects2.length = 0;
gdjs.EndCode.GDname2Objects1.length = 0;
gdjs.EndCode.GDname2Objects2.length = 0;
gdjs.EndCode.GDMarkerObjects1.length = 0;
gdjs.EndCode.GDMarkerObjects2.length = 0;
gdjs.EndCode.GDSettingsMarkerObjects1.length = 0;
gdjs.EndCode.GDSettingsMarkerObjects2.length = 0;
gdjs.EndCode.GDbackObjects1.length = 0;
gdjs.EndCode.GDbackObjects2.length = 0;
gdjs.EndCode.GDback2Objects1.length = 0;
gdjs.EndCode.GDback2Objects2.length = 0;
gdjs.EndCode.GDYourObjects1.length = 0;
gdjs.EndCode.GDYourObjects2.length = 0;
gdjs.EndCode.GDNewSprite6Objects1.length = 0;
gdjs.EndCode.GDNewSprite6Objects2.length = 0;
gdjs.EndCode.GDAvatarObjects1.length = 0;
gdjs.EndCode.GDAvatarObjects2.length = 0;
gdjs.EndCode.GDTransition2Objects1.length = 0;
gdjs.EndCode.GDTransition2Objects2.length = 0;
gdjs.EndCode.GDTargetObjects1.length = 0;
gdjs.EndCode.GDTargetObjects2.length = 0;
gdjs.EndCode.GDTransition3Objects1.length = 0;
gdjs.EndCode.GDTransition3Objects2.length = 0;
gdjs.EndCode.GDYour2Objects1.length = 0;
gdjs.EndCode.GDYour2Objects2.length = 0;
gdjs.EndCode.GDTransition4Objects1.length = 0;
gdjs.EndCode.GDTransition4Objects2.length = 0;
gdjs.EndCode.GDMCObjects1.length = 0;
gdjs.EndCode.GDMCObjects2.length = 0;
gdjs.EndCode.GDWallCollisionObjects1.length = 0;
gdjs.EndCode.GDWallCollisionObjects2.length = 0;
gdjs.EndCode.GDInteractObjects1.length = 0;
gdjs.EndCode.GDInteractObjects2.length = 0;
gdjs.EndCode.GDMCrilObjects1.length = 0;
gdjs.EndCode.GDMCrilObjects2.length = 0;
gdjs.EndCode.GD_9595DoctorObjects1.length = 0;
gdjs.EndCode.GD_9595DoctorObjects2.length = 0;
gdjs.EndCode.GDMcNameObjects1.length = 0;
gdjs.EndCode.GDMcNameObjects2.length = 0;
gdjs.EndCode.GDNameGameObjects1.length = 0;
gdjs.EndCode.GDNameGameObjects2.length = 0;
gdjs.EndCode.GDWho_9595IsObjects1.length = 0;
gdjs.EndCode.GDWho_9595IsObjects2.length = 0;
gdjs.EndCode.GDDialogue3Objects1.length = 0;
gdjs.EndCode.GDDialogue3Objects2.length = 0;
gdjs.EndCode.GDOption_9595BoxObjects1.length = 0;
gdjs.EndCode.GDOption_9595BoxObjects2.length = 0;
gdjs.EndCode.GDoptiontxtObjects1.length = 0;
gdjs.EndCode.GDoptiontxtObjects2.length = 0;
gdjs.EndCode.GDNewSprite7Objects1.length = 0;
gdjs.EndCode.GDNewSprite7Objects2.length = 0;
gdjs.EndCode.GDYour3Objects1.length = 0;
gdjs.EndCode.GDYour3Objects2.length = 0;
gdjs.EndCode.GDTHanksObjects1.length = 0;
gdjs.EndCode.GDTHanksObjects2.length = 0;
gdjs.EndCode.GDdontObjects1.length = 0;
gdjs.EndCode.GDdontObjects2.length = 0;
gdjs.EndCode.GDlinkObjects1.length = 0;
gdjs.EndCode.GDlinkObjects2.length = 0;
gdjs.EndCode.GDSettingsMarker2Objects1.length = 0;
gdjs.EndCode.GDSettingsMarker2Objects2.length = 0;
gdjs.EndCode.GDMovementObjects1.length = 0;
gdjs.EndCode.GDMovementObjects2.length = 0;
gdjs.EndCode.GDMarker2Objects1.length = 0;
gdjs.EndCode.GDMarker2Objects2.length = 0;

gdjs.EndCode.eventsList0(runtimeScene);
gdjs.EndCode.GDLoseObjects1.length = 0;
gdjs.EndCode.GDLoseObjects2.length = 0;
gdjs.EndCode.GDTry_9595AgainObjects1.length = 0;
gdjs.EndCode.GDTry_9595AgainObjects2.length = 0;
gdjs.EndCode.GDNewSprite2Objects1.length = 0;
gdjs.EndCode.GDNewSprite2Objects2.length = 0;
gdjs.EndCode.GDFloorObjects1.length = 0;
gdjs.EndCode.GDFloorObjects2.length = 0;
gdjs.EndCode.GDNewSpriteObjects1.length = 0;
gdjs.EndCode.GDNewSpriteObjects2.length = 0;
gdjs.EndCode.GDdialoguetxtObjects1.length = 0;
gdjs.EndCode.GDdialoguetxtObjects2.length = 0;
gdjs.EndCode.GDName_9595TxtObjects1.length = 0;
gdjs.EndCode.GDName_9595TxtObjects2.length = 0;
gdjs.EndCode.GDdialogueObjects1.length = 0;
gdjs.EndCode.GDdialogueObjects2.length = 0;
gdjs.EndCode.GDnameObjects1.length = 0;
gdjs.EndCode.GDnameObjects2.length = 0;
gdjs.EndCode.GDNewSprite4Objects1.length = 0;
gdjs.EndCode.GDNewSprite4Objects2.length = 0;
gdjs.EndCode.GDNewSprite5Objects1.length = 0;
gdjs.EndCode.GDNewSprite5Objects2.length = 0;
gdjs.EndCode.GDShotTrailObjects1.length = 0;
gdjs.EndCode.GDShotTrailObjects2.length = 0;
gdjs.EndCode.GDTransitionObjects1.length = 0;
gdjs.EndCode.GDTransitionObjects2.length = 0;
gdjs.EndCode.GDname2Objects1.length = 0;
gdjs.EndCode.GDname2Objects2.length = 0;
gdjs.EndCode.GDMarkerObjects1.length = 0;
gdjs.EndCode.GDMarkerObjects2.length = 0;
gdjs.EndCode.GDSettingsMarkerObjects1.length = 0;
gdjs.EndCode.GDSettingsMarkerObjects2.length = 0;
gdjs.EndCode.GDbackObjects1.length = 0;
gdjs.EndCode.GDbackObjects2.length = 0;
gdjs.EndCode.GDback2Objects1.length = 0;
gdjs.EndCode.GDback2Objects2.length = 0;
gdjs.EndCode.GDYourObjects1.length = 0;
gdjs.EndCode.GDYourObjects2.length = 0;
gdjs.EndCode.GDNewSprite6Objects1.length = 0;
gdjs.EndCode.GDNewSprite6Objects2.length = 0;
gdjs.EndCode.GDAvatarObjects1.length = 0;
gdjs.EndCode.GDAvatarObjects2.length = 0;
gdjs.EndCode.GDTransition2Objects1.length = 0;
gdjs.EndCode.GDTransition2Objects2.length = 0;
gdjs.EndCode.GDTargetObjects1.length = 0;
gdjs.EndCode.GDTargetObjects2.length = 0;
gdjs.EndCode.GDTransition3Objects1.length = 0;
gdjs.EndCode.GDTransition3Objects2.length = 0;
gdjs.EndCode.GDYour2Objects1.length = 0;
gdjs.EndCode.GDYour2Objects2.length = 0;
gdjs.EndCode.GDTransition4Objects1.length = 0;
gdjs.EndCode.GDTransition4Objects2.length = 0;
gdjs.EndCode.GDMCObjects1.length = 0;
gdjs.EndCode.GDMCObjects2.length = 0;
gdjs.EndCode.GDWallCollisionObjects1.length = 0;
gdjs.EndCode.GDWallCollisionObjects2.length = 0;
gdjs.EndCode.GDInteractObjects1.length = 0;
gdjs.EndCode.GDInteractObjects2.length = 0;
gdjs.EndCode.GDMCrilObjects1.length = 0;
gdjs.EndCode.GDMCrilObjects2.length = 0;
gdjs.EndCode.GD_9595DoctorObjects1.length = 0;
gdjs.EndCode.GD_9595DoctorObjects2.length = 0;
gdjs.EndCode.GDMcNameObjects1.length = 0;
gdjs.EndCode.GDMcNameObjects2.length = 0;
gdjs.EndCode.GDNameGameObjects1.length = 0;
gdjs.EndCode.GDNameGameObjects2.length = 0;
gdjs.EndCode.GDWho_9595IsObjects1.length = 0;
gdjs.EndCode.GDWho_9595IsObjects2.length = 0;
gdjs.EndCode.GDDialogue3Objects1.length = 0;
gdjs.EndCode.GDDialogue3Objects2.length = 0;
gdjs.EndCode.GDOption_9595BoxObjects1.length = 0;
gdjs.EndCode.GDOption_9595BoxObjects2.length = 0;
gdjs.EndCode.GDoptiontxtObjects1.length = 0;
gdjs.EndCode.GDoptiontxtObjects2.length = 0;
gdjs.EndCode.GDNewSprite7Objects1.length = 0;
gdjs.EndCode.GDNewSprite7Objects2.length = 0;
gdjs.EndCode.GDYour3Objects1.length = 0;
gdjs.EndCode.GDYour3Objects2.length = 0;
gdjs.EndCode.GDTHanksObjects1.length = 0;
gdjs.EndCode.GDTHanksObjects2.length = 0;
gdjs.EndCode.GDdontObjects1.length = 0;
gdjs.EndCode.GDdontObjects2.length = 0;
gdjs.EndCode.GDlinkObjects1.length = 0;
gdjs.EndCode.GDlinkObjects2.length = 0;
gdjs.EndCode.GDSettingsMarker2Objects1.length = 0;
gdjs.EndCode.GDSettingsMarker2Objects2.length = 0;
gdjs.EndCode.GDMovementObjects1.length = 0;
gdjs.EndCode.GDMovementObjects2.length = 0;
gdjs.EndCode.GDMarker2Objects1.length = 0;
gdjs.EndCode.GDMarker2Objects2.length = 0;


return;

}

gdjs['EndCode'] = gdjs.EndCode;
