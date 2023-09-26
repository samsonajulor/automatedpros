import React, { FC, useEffect, useMemo } from 'react';
import { ICTA } from './CTA.type';
import Text from '../Text';
import useWeb3 from '@hooks/useWeb3';
import { findMaxConsecutiveCharacter } from 'utils/global';
import { EColor, ESize } from 'theme/theme.enum';
import { ETextType, EFontWeight, ETextAlign } from '../Text/Text.enum';
import Button from '../Button';
import styles from './CTA.module.scss';

const CTA: FC<ICTA> = () => {
	const { accounts } = useWeb3();

	const address = accounts[0]?.address;

 const maxConsecutiveChars = useMemo(() => {
    return findMaxConsecutiveCharacter(address);
  }, [address]);

	useEffect(() => {
		console.log(`The character "${maxConsecutiveChars}" is the most consecutive character in the address ${address}`)
	}, [maxConsecutiveChars, address])
	
	return (
    <div className={styles.container}>
      <Text
        type={ETextType.h2}
        size={ESize.s}
        color={EColor.orange}
        weight={EFontWeight.regular}
        align={ETextAlign.center}
        className={styles.text}
      >
        Connected Address
        <Button color={EColor.lightBlue} valueToCopy={address} noPaddingResponsive>
          {address}
        </Button>
      </Text>
    </div>
  );
};

export { CTA };
