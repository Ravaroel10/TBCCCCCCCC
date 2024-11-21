gdjs.WinCode = {};
gdjs.WinCode.localVariables = [];
gdjs.WinCode.GDLoseObjects1= [];
gdjs.WinCode.GDLoseObjects2= [];
gdjs.WinCode.GDTry_9595AgainObjects1= [];
gdjs.WinCode.GDTry_9595AgainObjects2= [];
gdjs.WinCode.GDNewSprite2Objects1= [];
gdjs.WinCode.GDNewSprite2Objects2= [];
gdjs.WinCode.GDFloorObjects1= [];
gdjs.WinCode.GDFloorObjects2= [];
gdjs.WinCode.GDNewSpriteObjects1= [];
gdjs.WinCode.GDNewSpriteObjects2= [];
gdjs.WinCode.GDdialoguetxtObjects1= [];
gdjs.WinCode.GDdialoguetxtObjects2= [];
gdjs.WinCode.GDName_9595TxtObjects1= [];
gdjs.WinCode.GDName_9595TxtObjects2= [];
gdjs.WinCode.GDdialogueObjects1= [];
gdjs.WinCode.GDdialogueObjects2= [];
gdjs.WinCode.GDnameObjects1= [];
gdjs.WinCode.GDnameObjects2= [];
gdjs.WinCode.GDNewSprite4Objects1= [];
gdjs.WinCode.GDNewSprite4Objects2= [];
gdjs.WinCode.GDNewSprite5Objects1= [];
gdjs.WinCode.GDNewSprite5Objects2= [];
gdjs.WinCode.GDShotTrailObjects1= [];
gdjs.WinCode.GDShotTrailObjects2= [];
gdjs.WinCode.GDTransitionObjects1= [];
gdjs.WinCode.GDTransitionObjects2= [];
gdjs.WinCode.GDname2Objects1= [];
gdjs.WinCode.GDname2Objects2= [];
gdjs.WinCode.GDMarkerObjects1= [];
gdjs.WinCode.GDMarkerObjects2= [];
gdjs.WinCode.GDSettingsMarkerObjects1= [];
gdjs.WinCode.GDSettingsMarkerObjects2= [];
gdjs.WinCode.GDbackObjects1= [];
gdjs.WinCode.GDbackObjects2= [];
gdjs.WinCode.GDback2Objects1= [];
gdjs.WinCode.GDback2Objects2= [];
gdjs.WinCode.GDYourObjects1= [];
gdjs.WinCode.GDYourObjects2= [];
gdjs.WinCode.GDNewSprite6Objects1= [];
gdjs.WinCode.GDNewSprite6Objects2= [];
gdjs.WinCode.GDAvatarObjects1= [];
gdjs.WinCode.GDAvatarObjects2= [];
gdjs.WinCode.GDTransition2Objects1= [];
gdjs.WinCode.GDTransition2Objects2= [];
gdjs.WinCode.GDTargetObjects1= [];
gdjs.WinCode.GDTargetObjects2= [];
gdjs.WinCode.GDTransition3Objects1= [];
gdjs.WinCode.GDTransition3Objects2= [];
gdjs.WinCode.GDYour2Objects1= [];
gdjs.WinCode.GDYour2Objects2= [];
gdjs.WinCode.GDTransition4Objects1= [];
gdjs.WinCode.GDTransition4Objects2= [];
gdjs.WinCode.GDMCObjects1= [];
gdjs.WinCode.GDMCObjects2= [];
gdjs.WinCode.GDWallCollisionObjects1= [];
gdjs.WinCode.GDWallCollisionObjects2= [];
gdjs.WinCode.GDInteractObjects1= [];
gdjs.WinCode.GDInteractObjects2= [];
gdjs.WinCode.GDMCrilObjects1= [];
gdjs.WinCode.GDMCrilObjects2= [];
gdjs.WinCode.GD_9595DoctorObjects1= [];
gdjs.WinCode.GD_9595DoctorObjects2= [];
gdjs.WinCode.GDMcNameObjects1= [];
gdjs.WinCode.GDMcNameObjects2= [];
gdjs.WinCode.GDNameGameObjects1= [];
gdjs.WinCode.GDNameGameObjects2= [];
gdjs.WinCode.GDWho_9595IsObjects1= [];
gdjs.WinCode.GDWho_9595IsObjects2= [];
gdjs.WinCode.GDDialogue3Objects1= [];
gdjs.WinCode.GDDialogue3Objects2= [];
gdjs.WinCode.GDOption_9595BoxObjects1= [];
gdjs.WinCode.GDOption_9595BoxObjects2= [];
gdjs.WinCode.GDoptiontxtObjects1= [];
gdjs.WinCode.GDoptiontxtObjects2= [];
gdjs.WinCode.GDNewSprite7Objects1= [];
gdjs.WinCode.GDNewSprite7Objects2= [];
gdjs.WinCode.GDYour3Objects1= [];
gdjs.WinCode.GDYour3Objects2= [];
gdjs.WinCode.GDTHanksObjects1= [];
gdjs.WinCode.GDTHanksObjects2= [];
gdjs.WinCode.GDdontObjects1= [];
gdjs.WinCode.GDdontObjects2= [];
gdjs.WinCode.GDlinkObjects1= [];
gdjs.WinCode.GDlinkObjects2= [];
gdjs.WinCode.GDSettingsMarker2Objects1= [];
gdjs.WinCode.GDSettingsMarker2Objects2= [];
gdjs.WinCode.GDMovementObjects1= [];
gdjs.WinCode.GDMovementObjects2= [];
gdjs.WinCode.GDMarker2Objects1= [];
gdjs.WinCode.GDMarker2Objects2= [];


gdjs.WinCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.WinCode.GDMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.WinCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Transition2"), gdjs.WinCode.GDTransition2Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.WinCode.GDNewSprite2Objects1.length !== 0 ? gdjs.WinCode.GDNewSprite2Objects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.WinCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.WinCode.GDNewSprite2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.WinCode.GDTransition2Objects1.length ;i < len;++i) {
    gdjs.WinCode.GDTransition2Objects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "violin-win-5-185128.mp3", 1, false, 100, 1);
}{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "CameraMove", (( gdjs.WinCode.GDMarkerObjects1.length === 0 ) ? 0 :gdjs.WinCode.GDMarkerObjects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "easeInQuad", 1);
}{for(var i = 0, len = gdjs.WinCode.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDMarkerObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Try_Again"), gdjs.WinCode.GDTry_9595AgainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinCode.GDTry_9595AgainObjects1.length;i<l;++i) {
    if ( gdjs.WinCode.GDTry_9595AgainObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WinCode.GDTry_9595AgainObjects1[k] = gdjs.WinCode.GDTry_9595AgainObjects1[i];
        ++k;
    }
}
gdjs.WinCode.GDTry_9595AgainObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.WinCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.WinCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Try_Again"), gdjs.WinCode.GDTry_9595AgainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinCode.GDTry_9595AgainObjects1.length;i<l;++i) {
    if ( !(gdjs.WinCode.GDTry_9595AgainObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.WinCode.GDTry_9595AgainObjects1[k] = gdjs.WinCode.GDTry_9595AgainObjects1[i];
        ++k;
    }
}
gdjs.WinCode.GDTry_9595AgainObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.WinCode.GDTry_9595AgainObjects1 */
{for(var i = 0, len = gdjs.WinCode.GDTry_9595AgainObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDTry_9595AgainObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Try_Again"), gdjs.WinCode.GDTry_9595AgainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinCode.GDTry_9595AgainObjects1.length;i<l;++i) {
    if ( gdjs.WinCode.GDTry_9595AgainObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WinCode.GDTry_9595AgainObjects1[k] = gdjs.WinCode.GDTry_9595AgainObjects1[i];
        ++k;
    }
}
gdjs.WinCode.GDTry_9595AgainObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.WinCode.GDTry_9595AgainObjects1 */
{for(var i = 0, len = gdjs.WinCode.GDTry_9595AgainObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDTry_9595AgainObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.WinCode.GDTransitionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinCode.GDTransitionObjects1.length;i<l;++i) {
    if ( gdjs.WinCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WinCode.GDTransitionObjects1[k] = gdjs.WinCode.GDTransitionObjects1[i];
        ++k;
    }
}
gdjs.WinCode.GDTransitionObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dialogue Akhir", false);
}}

}


};

gdjs.WinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinCode.GDLoseObjects1.length = 0;
gdjs.WinCode.GDLoseObjects2.length = 0;
gdjs.WinCode.GDTry_9595AgainObjects1.length = 0;
gdjs.WinCode.GDTry_9595AgainObjects2.length = 0;
gdjs.WinCode.GDNewSprite2Objects1.length = 0;
gdjs.WinCode.GDNewSprite2Objects2.length = 0;
gdjs.WinCode.GDFloorObjects1.length = 0;
gdjs.WinCode.GDFloorObjects2.length = 0;
gdjs.WinCode.GDNewSpriteObjects1.length = 0;
gdjs.WinCode.GDNewSpriteObjects2.length = 0;
gdjs.WinCode.GDdialoguetxtObjects1.length = 0;
gdjs.WinCode.GDdialoguetxtObjects2.length = 0;
gdjs.WinCode.GDName_9595TxtObjects1.length = 0;
gdjs.WinCode.GDName_9595TxtObjects2.length = 0;
gdjs.WinCode.GDdialogueObjects1.length = 0;
gdjs.WinCode.GDdialogueObjects2.length = 0;
gdjs.WinCode.GDnameObjects1.length = 0;
gdjs.WinCode.GDnameObjects2.length = 0;
gdjs.WinCode.GDNewSprite4Objects1.length = 0;
gdjs.WinCode.GDNewSprite4Objects2.length = 0;
gdjs.WinCode.GDNewSprite5Objects1.length = 0;
gdjs.WinCode.GDNewSprite5Objects2.length = 0;
gdjs.WinCode.GDShotTrailObjects1.length = 0;
gdjs.WinCode.GDShotTrailObjects2.length = 0;
gdjs.WinCode.GDTransitionObjects1.length = 0;
gdjs.WinCode.GDTransitionObjects2.length = 0;
gdjs.WinCode.GDname2Objects1.length = 0;
gdjs.WinCode.GDname2Objects2.length = 0;
gdjs.WinCode.GDMarkerObjects1.length = 0;
gdjs.WinCode.GDMarkerObjects2.length = 0;
gdjs.WinCode.GDSettingsMarkerObjects1.length = 0;
gdjs.WinCode.GDSettingsMarkerObjects2.length = 0;
gdjs.WinCode.GDbackObjects1.length = 0;
gdjs.WinCode.GDbackObjects2.length = 0;
gdjs.WinCode.GDback2Objects1.length = 0;
gdjs.WinCode.GDback2Objects2.length = 0;
gdjs.WinCode.GDYourObjects1.length = 0;
gdjs.WinCode.GDYourObjects2.length = 0;
gdjs.WinCode.GDNewSprite6Objects1.length = 0;
gdjs.WinCode.GDNewSprite6Objects2.length = 0;
gdjs.WinCode.GDAvatarObjects1.length = 0;
gdjs.WinCode.GDAvatarObjects2.length = 0;
gdjs.WinCode.GDTransition2Objects1.length = 0;
gdjs.WinCode.GDTransition2Objects2.length = 0;
gdjs.WinCode.GDTargetObjects1.length = 0;
gdjs.WinCode.GDTargetObjects2.length = 0;
gdjs.WinCode.GDTransition3Objects1.length = 0;
gdjs.WinCode.GDTransition3Objects2.length = 0;
gdjs.WinCode.GDYour2Objects1.length = 0;
gdjs.WinCode.GDYour2Objects2.length = 0;
gdjs.WinCode.GDTransition4Objects1.length = 0;
gdjs.WinCode.GDTransition4Objects2.length = 0;
gdjs.WinCode.GDMCObjects1.length = 0;
gdjs.WinCode.GDMCObjects2.length = 0;
gdjs.WinCode.GDWallCollisionObjects1.length = 0;
gdjs.WinCode.GDWallCollisionObjects2.length = 0;
gdjs.WinCode.GDInteractObjects1.length = 0;
gdjs.WinCode.GDInteractObjects2.length = 0;
gdjs.WinCode.GDMCrilObjects1.length = 0;
gdjs.WinCode.GDMCrilObjects2.length = 0;
gdjs.WinCode.GD_9595DoctorObjects1.length = 0;
gdjs.WinCode.GD_9595DoctorObjects2.length = 0;
gdjs.WinCode.GDMcNameObjects1.length = 0;
gdjs.WinCode.GDMcNameObjects2.length = 0;
gdjs.WinCode.GDNameGameObjects1.length = 0;
gdjs.WinCode.GDNameGameObjects2.length = 0;
gdjs.WinCode.GDWho_9595IsObjects1.length = 0;
gdjs.WinCode.GDWho_9595IsObjects2.length = 0;
gdjs.WinCode.GDDialogue3Objects1.length = 0;
gdjs.WinCode.GDDialogue3Objects2.length = 0;
gdjs.WinCode.GDOption_9595BoxObjects1.length = 0;
gdjs.WinCode.GDOption_9595BoxObjects2.length = 0;
gdjs.WinCode.GDoptiontxtObjects1.length = 0;
gdjs.WinCode.GDoptiontxtObjects2.length = 0;
gdjs.WinCode.GDNewSprite7Objects1.length = 0;
gdjs.WinCode.GDNewSprite7Objects2.length = 0;
gdjs.WinCode.GDYour3Objects1.length = 0;
gdjs.WinCode.GDYour3Objects2.length = 0;
gdjs.WinCode.GDTHanksObjects1.length = 0;
gdjs.WinCode.GDTHanksObjects2.length = 0;
gdjs.WinCode.GDdontObjects1.length = 0;
gdjs.WinCode.GDdontObjects2.length = 0;
gdjs.WinCode.GDlinkObjects1.length = 0;
gdjs.WinCode.GDlinkObjects2.length = 0;
gdjs.WinCode.GDSettingsMarker2Objects1.length = 0;
gdjs.WinCode.GDSettingsMarker2Objects2.length = 0;
gdjs.WinCode.GDMovementObjects1.length = 0;
gdjs.WinCode.GDMovementObjects2.length = 0;
gdjs.WinCode.GDMarker2Objects1.length = 0;
gdjs.WinCode.GDMarker2Objects2.length = 0;

gdjs.WinCode.eventsList0(runtimeScene);
gdjs.WinCode.GDLoseObjects1.length = 0;
gdjs.WinCode.GDLoseObjects2.length = 0;
gdjs.WinCode.GDTry_9595AgainObjects1.length = 0;
gdjs.WinCode.GDTry_9595AgainObjects2.length = 0;
gdjs.WinCode.GDNewSprite2Objects1.length = 0;
gdjs.WinCode.GDNewSprite2Objects2.length = 0;
gdjs.WinCode.GDFloorObjects1.length = 0;
gdjs.WinCode.GDFloorObjects2.length = 0;
gdjs.WinCode.GDNewSpriteObjects1.length = 0;
gdjs.WinCode.GDNewSpriteObjects2.length = 0;
gdjs.WinCode.GDdialoguetxtObjects1.length = 0;
gdjs.WinCode.GDdialoguetxtObjects2.length = 0;
gdjs.WinCode.GDName_9595TxtObjects1.length = 0;
gdjs.WinCode.GDName_9595TxtObjects2.length = 0;
gdjs.WinCode.GDdialogueObjects1.length = 0;
gdjs.WinCode.GDdialogueObjects2.length = 0;
gdjs.WinCode.GDnameObjects1.length = 0;
gdjs.WinCode.GDnameObjects2.length = 0;
gdjs.WinCode.GDNewSprite4Objects1.length = 0;
gdjs.WinCode.GDNewSprite4Objects2.length = 0;
gdjs.WinCode.GDNewSprite5Objects1.length = 0;
gdjs.WinCode.GDNewSprite5Objects2.length = 0;
gdjs.WinCode.GDShotTrailObjects1.length = 0;
gdjs.WinCode.GDShotTrailObjects2.length = 0;
gdjs.WinCode.GDTransitionObjects1.length = 0;
gdjs.WinCode.GDTransitionObjects2.length = 0;
gdjs.WinCode.GDname2Objects1.length = 0;
gdjs.WinCode.GDname2Objects2.length = 0;
gdjs.WinCode.GDMarkerObjects1.length = 0;
gdjs.WinCode.GDMarkerObjects2.length = 0;
gdjs.WinCode.GDSettingsMarkerObjects1.length = 0;
gdjs.WinCode.GDSettingsMarkerObjects2.length = 0;
gdjs.WinCode.GDbackObjects1.length = 0;
gdjs.WinCode.GDbackObjects2.length = 0;
gdjs.WinCode.GDback2Objects1.length = 0;
gdjs.WinCode.GDback2Objects2.length = 0;
gdjs.WinCode.GDYourObjects1.length = 0;
gdjs.WinCode.GDYourObjects2.length = 0;
gdjs.WinCode.GDNewSprite6Objects1.length = 0;
gdjs.WinCode.GDNewSprite6Objects2.length = 0;
gdjs.WinCode.GDAvatarObjects1.length = 0;
gdjs.WinCode.GDAvatarObjects2.length = 0;
gdjs.WinCode.GDTransition2Objects1.length = 0;
gdjs.WinCode.GDTransition2Objects2.length = 0;
gdjs.WinCode.GDTargetObjects1.length = 0;
gdjs.WinCode.GDTargetObjects2.length = 0;
gdjs.WinCode.GDTransition3Objects1.length = 0;
gdjs.WinCode.GDTransition3Objects2.length = 0;
gdjs.WinCode.GDYour2Objects1.length = 0;
gdjs.WinCode.GDYour2Objects2.length = 0;
gdjs.WinCode.GDTransition4Objects1.length = 0;
gdjs.WinCode.GDTransition4Objects2.length = 0;
gdjs.WinCode.GDMCObjects1.length = 0;
gdjs.WinCode.GDMCObjects2.length = 0;
gdjs.WinCode.GDWallCollisionObjects1.length = 0;
gdjs.WinCode.GDWallCollisionObjects2.length = 0;
gdjs.WinCode.GDInteractObjects1.length = 0;
gdjs.WinCode.GDInteractObjects2.length = 0;
gdjs.WinCode.GDMCrilObjects1.length = 0;
gdjs.WinCode.GDMCrilObjects2.length = 0;
gdjs.WinCode.GD_9595DoctorObjects1.length = 0;
gdjs.WinCode.GD_9595DoctorObjects2.length = 0;
gdjs.WinCode.GDMcNameObjects1.length = 0;
gdjs.WinCode.GDMcNameObjects2.length = 0;
gdjs.WinCode.GDNameGameObjects1.length = 0;
gdjs.WinCode.GDNameGameObjects2.length = 0;
gdjs.WinCode.GDWho_9595IsObjects1.length = 0;
gdjs.WinCode.GDWho_9595IsObjects2.length = 0;
gdjs.WinCode.GDDialogue3Objects1.length = 0;
gdjs.WinCode.GDDialogue3Objects2.length = 0;
gdjs.WinCode.GDOption_9595BoxObjects1.length = 0;
gdjs.WinCode.GDOption_9595BoxObjects2.length = 0;
gdjs.WinCode.GDoptiontxtObjects1.length = 0;
gdjs.WinCode.GDoptiontxtObjects2.length = 0;
gdjs.WinCode.GDNewSprite7Objects1.length = 0;
gdjs.WinCode.GDNewSprite7Objects2.length = 0;
gdjs.WinCode.GDYour3Objects1.length = 0;
gdjs.WinCode.GDYour3Objects2.length = 0;
gdjs.WinCode.GDTHanksObjects1.length = 0;
gdjs.WinCode.GDTHanksObjects2.length = 0;
gdjs.WinCode.GDdontObjects1.length = 0;
gdjs.WinCode.GDdontObjects2.length = 0;
gdjs.WinCode.GDlinkObjects1.length = 0;
gdjs.WinCode.GDlinkObjects2.length = 0;
gdjs.WinCode.GDSettingsMarker2Objects1.length = 0;
gdjs.WinCode.GDSettingsMarker2Objects2.length = 0;
gdjs.WinCode.GDMovementObjects1.length = 0;
gdjs.WinCode.GDMovementObjects2.length = 0;
gdjs.WinCode.GDMarker2Objects1.length = 0;
gdjs.WinCode.GDMarker2Objects2.length = 0;


return;

}

gdjs['WinCode'] = gdjs.WinCode;
