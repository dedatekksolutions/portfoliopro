import React from "react";
import { TOTAL_SCREENS, GET_SCEEN_INDEX } from "../../../utilities/commonUtils";
import ScrollService from "../../../utilities/scrollService";
import { faaBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;
    let screenIndex = GET_SCEEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };
  let currentSubscription = ScrollService.currentScreenBroadcaster.subscribe(
    updateCurrentScreen
  );
  return <div></div>;
}
