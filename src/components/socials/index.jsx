import React from 'react';
import {ReactComponent as TwIcon} from "../../assets/images/icons/twitter.svg";
import s from "./socials.module.scss";
import {ReactComponent as MdIcon} from "../../assets/images/icons/medium.svg";
import {ReactComponent as GhIcon} from "../../assets/images/icons/GitHub.svg";
import cn from "classnames";

const Socials = ({ isHeader = false }) => {
  return (
    <div className={s.socials}>
      <div className={cn("flex align-center", {[s.socials__header]: isHeader})}>
        <a href="https://twitter.com/omomo_finance" target="_blank" rel="noreferrer"><TwIcon className={s.socials__icon} /></a>
        <a href="https://medium.com/omomo" target="_blank" rel="noreferrer"><MdIcon className={s.socials__icon} /></a>
        <a href="https://github.com/nearlend" target="_blank" rel="noreferrer"><GhIcon className={s.socials__icon} /></a>
      </div>
    </div>
  );
};

export default Socials;