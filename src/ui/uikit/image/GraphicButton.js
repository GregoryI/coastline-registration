// Libraries
import React from "react";
import classNames from "classnames";

// Util
import { getGraphicImage } from "../../../util/image.js";

export default ({
  id,
  className=false,
  img,
  onClick,
  onClickImg,
  width=20,
  height=20,
  title="",
  onMouseDownImg,
}) => (
  <div
    id={id}
    className={classNames({"graphic-button": !!onClick}, className)}
    onClick={onClick}
    style={{ "width": width, "height": height }}>
    <img
      id={id}
      src={getGraphicImage(img)}
      title={title}
      alt={title}
      onClick={onClickImg}
      onMouseDown={onMouseDownImg}/>
  </div>
);
