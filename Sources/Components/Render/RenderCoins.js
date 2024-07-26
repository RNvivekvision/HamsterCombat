import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, FontFamily, hp, wp } from '../../Theme';
import { RNImage, RNStyles, RNText } from '../../Common';
import Reanimated, { FadeInDown } from 'react-native-reanimated';

const RenderCoins = ({ item, index, onPress }) => {
  return (
    <Reanimated.View
      entering={FadeInDown.delay(index * 100)}
      style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => onPress?.(item)}
        style={styles.touchable}>
        <View style={styles.cointsContainer}>
          <RNImage source={item.coin} style={styles.img} />
          <RNText>{item.title}</RNText>
        </View>
        <RNText
          align={'center'}
          family={FontFamily.SemiBold}
          pVertical={hp(0.5)}>
          {item.points}
        </RNText>
      </TouchableOpacity>
    </Reanimated.View>
  );
};

const size = { coin: wp(10) };
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White + '20',
    width: wp(44),
    marginHorizontal: wp(0.8),
    marginVertical: hp(0.5),
    borderRadius: wp(3),
  },
  touchable: {
    borderRadius: wp(3),
  },
  cointsContainer: {
    ...RNStyles.flexRow,
    paddingVertical: hp(1),
    borderBottomWidth: 1,
    borderBlockColor: Colors.White + '40',
  },
  img: {
    width: size.coin,
    height: size.coin,
    marginLeft: wp(10),
    marginRight: wp(4),
  },
});

export default RenderCoins;
