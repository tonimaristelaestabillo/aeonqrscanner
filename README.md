# Description
React Native Project with enabled react-native-camera and react-native-qr-scanner
## App Preview 
![N|Solid](https://image.ibb.co/eymbZf/Screen-Shot-2018-11-14-at-5-42-42-PM.png)
### Setup

### iOS 10
With iOS 10 and higher you need to add the `Privacy - Camera Usage Description` key to the info.plist of your project. This should be found in `your_project/ios/your_project/Info.plist`. Add the following code:

`<key>NSCameraUsageDescription</key>`
`<string>Your message to user when the camera is accessed for the first time</string>`

<!-- Include this only if you are planning to use the camera roll -->
`<key>NSPhotoLibraryUsageDescription</key>`
`<string>Your message to user when the photo library is accessed for the first time</string>`

<!-- Include this only if you are planning to use the microphone for video recording -->
`<key>NSMicrophoneUsageDescription</key>`
`<string>Your message to user when the microsphone is accessed for the first time</string>`

### react-native-camera
`react-native-camera` is a dependency for this package that you'll need to add to your project. To install, run the following commands:

`npm install react-native-camera --save`
`react-native link react-native-camera`

  - cd `ios`
  - Create a pod using `pod init`

- Add the plugin dependency to your Podfile, pointing at the path where NPM installed it:
`pod 'react-native-camera', path: '../node_modules/react-native-camera'`
- Run `pod install`


```
# Uncomment the next line to define a global platform for your project
# platform :ios, '9.0'

target 'scanner' do
  # Uncomment the next line if you're using Swift or would like to use dynamic frameworks
  # use_frameworks!

  # Pods for scanner

  target 'scanner-tvOSTests' do
    inherit! :search_paths
    # Pods for testing
  end

  # target 'scannerTests' do
  #   inherit! :search_paths
  #   # Pods for testing
  # end

  pod 'React', :path => '../node_modules/react-native', :subspecs => [
    'Core',
    'CxxBridge', # Include this for RN >= 0.47
    'DevSupport', # Include this to enable In-App Devmenu if RN >= 0.43
    'RCTText',
    'RCTNetwork',
    'RCTWebSocket', # Needed for debugging
    'RCTAnimation', # Needed for FlatList and animations running on native UI thread
    # Add any other subspecs you want to use in your project
  ]

  # Explicitly include Yoga if you are using RN >= 0.42.0
  pod 'yoga', :path => '../node_modules/react-native/ReactCommon/yoga'

  # Third party deps podspec link
  pod 'react-native-camera', path: '../node_modules/react-native-camera'

end

target 'scanner-tvOS' do
  # Uncomment the next line if you're using Swift or would like to use dynamic frameworks
  # use_frameworks!

  # Pods for scanner-tvOS

  target 'scanner-tvOSTests' do
    inherit! :search_paths
    # Pods for testing
  end

end

post_install do |installer|
  installer.pods_project.targets.each do |target|
    if target.name == "React"
      target.remove_from_project
    end
  end
end
```

### Xcode

- In XCode, in the project navigator, right click `Libraries ➜ Add Files to [your project's name]
`
- Go to `node_modules ➜ react-native-camera` and add R`NCamera.xcodeproj`
- Expand the `RNCamera.xcodeproj` ➜ `Products folder`
- In XCode, in the project navigator, select your project. Add `libRNCamera.a` to your project's `Build Phases ➜ Link Binary With Libraries`
- Click `RNCamera.xcodeproj` in the project navigator and go the Build Settings tab. Make sure 'All' is toggled on (instead of 'Basic'). In the Search Paths section, look for Header Search Paths and make sure it contains both `$(SRCROOT)/../../react-native/React and $(SRCROOT)/../../../React` - mark both as recursive.


### react-native-qrcode-scanner

`npm install react-native-qrcode-scanner --save`
`react-native link react-native-qrcode-scanner`
`react-native link react-native-permissions`




# Running the application

  - Clone repository
  - Change directory `cd scanner`, then run `npm install`.
  - Run in IOS Simulator using,  `react-native run-ios`.









