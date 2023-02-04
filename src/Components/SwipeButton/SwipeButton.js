import React from "react";
import IconButton from "@material-ui/core/IconButton";
import StarRateIcon from "@material-ui/icons/StarRate";
import CloseIcon from "@material-ui/icons/Close";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import ReplayIcon from "@material-ui/icons/Replay";
import FavoriteIcon from "@material-ui/icons/Favorite";

import "./SwipeButton.css";

const SwipeButton = () => {
  return (
    <div className="swipeButtons">
      <IconButton>
        <ReplayIcon className="swipeButton_repeat" />
      </IconButton>
      <IconButton>
        <CloseIcon className="swipeButton_close" />
      </IconButton>
      <IconButton>
        <StarRateIcon className="swipeButton_star" />
      </IconButton>
      <IconButton>
        <FavoriteIcon className="swipeButton_favorite" />
      </IconButton>
      <IconButton>
        <FlashOnIcon className="swipeButton_flash" />
      </IconButton>
    </div>
  );
};

export default SwipeButton;
