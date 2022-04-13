// async function ImagePickerCall() {
//     if (Constants.platform.ios) {
//       const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

//       if (status !== 'granted') {
//         alert("Nós precisamos da sua permissão.");
//         return;
//       }
//     }
//     const data = await ImagePicker.launchCameraAsync({});

//     if (data.cancelled) {
//       return;
//     }
    
//     if (!data.uri) {
//       return;
//    }
// }
  