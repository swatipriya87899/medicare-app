
// import { PermissionsAndroid, Platform } from "react-native";


// export const locationPermission = () => new Promise(async (resolve, reject) => {
//     if (Platform.OS === 'ios') {
//         try {
//             const permissionStatus = await Geolocation.requestAuthorization('whenInUse');
//             if (permissionStatus === 'granted') {
//                 return resolve("granted");
//             }
//             reject('Permission not granted');
//         } catch (error) {
//             return reject(error);
//         }
//     }
//     return PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//     ).then((granted) => {
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             resolve("granted");
//         }
//         return reject('Location Permission denied');
//     }).catch((error) => {
//         console.log('Ask Location permission error: ', error);
//         return reject(error);
//     });
// });