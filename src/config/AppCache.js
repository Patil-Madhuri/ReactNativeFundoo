import {AsyncStorage} from 'react-native';
import { Cache } from "react-native-cache";

var AppCache = new Cache({
    namespace: "madhuri",
    policy: {
        maxEntries: 5000
    },
    backend: AsyncStorage
});


export default AppCache;