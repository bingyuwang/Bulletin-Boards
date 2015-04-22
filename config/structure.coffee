# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
initialView:
    id: "initialView"
    location: "login#index"
  tabs: [
    {
      title: "Home"
      id: "home"
      location: "Home#index" # Supersonic module#view type navigation
    }
    {
      title: "Search"
      id: "search"
      location: "example#search"
    }
    {
      title: "Settings"
      id: "settings"
      location: "Home#settings" # URLs are supported!
    }
  ]

  # rootView:
  #   location: "testobject#index"

  preloads: [
    {
      id: "learn-more"
      location: "example#learn-more"
    }
    {
      id: "using-the-scanner"
      location: "example#using-the-scanner"
    }
  ]

  # drawers:
  #   left:
  #     id: "leftDrawer"
  #     location: "example#drawer"
  #     showOnAppLoad: false
  #   options:
  #     animation: "swingingDoor"
  #
  # initialView:
  #   id: "initialView"
  #   location: "example#initial-view"
