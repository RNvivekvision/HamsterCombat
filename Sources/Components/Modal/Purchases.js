import {
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { RNIcon, RNImage, RNStyles, RNText } from '../../Common';
import { Images } from '../../Constants';
import { Colors, FontFamily, hp, wp } from '../../Theme';
import { useInset } from '../../Hooks';
import { DummyData } from '../../Utils';
import { RenderCoins } from '../Render';

const { Purchases } = DummyData;

const Plans = ({ visible, onClose }) => {
  const styles = useStyles();
  const inset = useInset();

  return (
    <Modal visible={visible} animationType={'slide'} onRequestClose={onClose}>
      <View style={styles.container}>
        <RNIcon
          icon={Images.cross}
          containerStyle={styles.iconContainer}
          iconStyle={styles.icon}
          onPress={onClose}
        />

        <ScrollView>
          <View style={styles.notchArea} />
          <TouchableOpacity activeOpacity={0.6} style={styles.AdsContainer}>
            <View style={styles.removeAdsContainer}>
              <RNImage source={Images.removeAds} style={styles.removeAds} />
              <RNText family={FontFamily.SemiBold}>{'Remove Ads'}</RNText>
            </View>
            <RNText pTop={hp(1)} align={'center'} family={FontFamily.SemiBold}>
              {'240rs'}
            </RNText>
          </TouchableOpacity>

          <View style={styles.coinsContainer}>
            {[...Purchases, ...Purchases].map((v, i) => (
              <RenderCoins
                key={i}
                item={v}
                index={i}
                onPress={v => console.log({ v })}
              />
            ))}
          </View>
          <View style={styles.bottomArea} />
        </ScrollView>
      </View>
    </Modal>
  );
};

const size = { close: wp(8), removeAds: wp(17) };
const useStyles = () => {
  const inset = useInset();
  return StyleSheet.create({
    container: {
      ...RNStyles.container,
      backgroundColor: Colors.Primary,
    },
    notchArea: {
      paddingTop: inset.top + hp(6),
    },
    bottomArea: {
      paddingTop: inset.bottom + hp(1),
    },
    iconContainer: {
      width: size.close,
      height: size.close,
      borderRadius: 100,
      position: 'absolute',
      top: inset.top + wp(2),
      right: wp(4),
      backgroundColor: Colors.White + '20',
    },
    icon: {
      width: size.close * 0.4,
      height: size.close * 0.4,
    },
    AdsContainer: {
      marginHorizontal: wp(4),
      backgroundColor: Colors.White + '20',
      paddingVertical: hp(1),
      borderRadius: wp(4),
    },
    removeAdsContainer: {
      ...RNStyles.flexRow,
      borderBottomWidth: 1,
      borderBlockColor: Colors.White + '40',
      paddingBottom: hp(1),
    },
    removeAds: {
      width: size.removeAds,
      height: size.removeAds,
      marginRight: wp(10),
      marginLeft: wp(10),
    },
    coinsContainer: {
      marginHorizontal: wp(4),
      marginVertical: hp(2),
      ...RNStyles.flexWrapHorizontal,
      justifyContent: 'space-between',
    },
  });
};

export default Plans;
