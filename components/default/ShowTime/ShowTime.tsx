import React, { FC, useEffect, useState } from 'react';
import { IShowTime } from './ShowTime.type';
import Text from '../Text';
import { EColor, ESize } from 'theme/theme.enum';
import { ETextType, EFontWeight, ETextAlign } from '../Text/Text.enum';
import Button from '../Button';
import styles from './ShowTime.module.scss';

const ShowTime: FC<IShowTime> = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClick = () => {
    setShowTime(prev => !prev);
    setClickCount(clickCount + 1);
  };

  const handleReset = () => {
    setClickCount(0);
    setRenderCount(0);
  }

  useEffect(() => {
    setRenderCount(renderCount + 1);
    console.log(`The current time button has been clicked ${clickCount} times`);
  }, [clickCount]);

	
	return (
    <div className={styles.container}>
      <Button onClick={handleClick} color={EColor.yellow}>
        {showTime ? 'Hide Time' : 'Show Current Time'}
      </Button>
      <br />
      <hr className={styles.horizontalRule} />
      {showTime && (
        <Text
          type={ETextType.h2}
          size={ESize.s}
          color={EColor.orange}
          weight={EFontWeight.regular}
          align={ETextAlign.center}
          className={styles.text}
        >
          Current Time: {currentTime.toLocaleTimeString()}
        </Text>
      )}
      <Text
        type={ETextType.h2}
        size={ESize.s}
        color={EColor.success}
        weight={EFontWeight.regular}
        align={ETextAlign.center}
        className={styles.text}
      >
        Render Count: {renderCount}
      </Text>
      <br />
      <hr className={styles.horizontalRule} />
      <Button onClick={handleReset} color={EColor.blueGradient}>
        {'reset'}
      </Button>
    </div>
  );
};

export { ShowTime };
