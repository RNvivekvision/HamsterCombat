import { StyleSheet, View } from 'react-native';
import { RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';

const EarnPerTap = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <RNText style={styles.title}>{'Earn per tap'}</RNText>
        <RNText style={styles.title}>{'+' + 1}</RNText>
      </View>
      <View style={styles.box}>
        <RNText style={styles.title}>{'Coins to level up'}</RNText>
        <RNText style={styles.title}>{'0'}</RNText>
      </View>
      <View style={styles.box}>
        <RNText style={styles.title}>{'Earn per hour'}</RNText>
        <RNText style={styles.title}>{'0'}</RNText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: hp(1),
    marginHorizontal: wp(3),
  },
  box: {
    flex: 1,
    marginHorizontal: wp(1),
    backgroundColor: Colors.White + '20',
    paddingVertical: hp(1),
    borderRadius: wp(2),
  },
  title: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.SemiBold,
    textAlign: 'center',
  },
});

export default EarnPerTap;
