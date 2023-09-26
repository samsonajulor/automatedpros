import Meta from '@components/common/Meta';
import CTA from '@components/default/CTA';
import ShowTime from '@components/default/ShowTime';
import { FC, useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import { IHomePage } from './HomePage.type';

const HomePage: FC<IHomePage> = () => {
  const [backgroundColor, setBackgroundColor] = useState('green');

  useEffect(() => {
      const handleMouseMove = (event: any) => {
      const xPercentage = (event.clientX / window.innerWidth) * 100;
      const yPercentage = (event.clientY / window.innerHeight) * 100;

      const greenShade = Math.round((xPercentage + yPercentage) / 2);

      const greenValue = Math.min(255, Math.max(0, greenShade));

      const color = `rgb(0, ${greenValue}, 0)`;

      setBackgroundColor(color);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };

  }, []);

	return (
		<div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: backgroundColor,
        transition: 'background-color 0.3s ease',
      }}>
			<Meta
				title='automatedpros'
				description='automatedpros'
			/>

			<div>
				<div className={styles.mainContainer}>
					<CTA />
					<ShowTime />
				</div>
			</div>
		</div>
	);
};

export { HomePage };
