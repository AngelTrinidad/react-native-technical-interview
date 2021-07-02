import { StackNavigation } from '@interfaces/navigation';
import { useNavigation as nativeUseNavigation } from '@react-navigation/native';

export const useNavigation = () => nativeUseNavigation<StackNavigation>();
