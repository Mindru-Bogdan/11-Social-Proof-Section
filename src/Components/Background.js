import BackgroundTopDesktop from '../../src/bg-pattern-top-desktop.svg';
import BackgroundBottomDesktop from '../../src/bg-pattern-bottom-desktop.svg';
import BackgroundTopMobile from '../../src/bg-pattern-top-mobile.svg';
import BackgroundBottomMobile from '../../src/bg-pattern-bottom-mobile.svg';

import classes from './Background.module.css';

const Background = () => {
  return (
    <div>
      <img className={classes.bgTopDesk} src={BackgroundTopDesktop}></img>
      <img className={classes.bgBottomDesk} src={BackgroundBottomDesktop}></img>
      <img className={classes.bgTopMob} src={BackgroundTopMobile}></img>
      <img className={classes.bgBottomMob} src={BackgroundBottomMobile}></img>
    </div>
  );
};

export default Background;
