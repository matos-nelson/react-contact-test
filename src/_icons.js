import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faAddressBook,
  faBell,
  faBookmark,
  faCalendar,
  faCheck,
  faClipboard,
  faCloudDownloadAlt,
  faCog,
  faCommentAlt,
  faEllipsisV,
  faEnvelope,
  faHome,
  faLayerGroup,
  faMapMarkerAlt,
  faListUl,
  faLock,
  faPen,
  faPlus,
  faSearch,
  faSignOutAlt,
  faTachometerAlt,
  faTimes,
  faTools,
  faUser,
  faUsers,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

function include() {
  library.add(faAddressBook);
  library.add(faBell);
  library.add(faBookmark);
  library.add(faCalendar);
  library.add(faCheck);
  library.add(faClipboard);
  library.add(faCloudDownloadAlt);
  library.add(faCog);
  library.add(faCommentAlt);
  library.add(faEllipsisV);
  library.add(faEnvelope);
  library.add(faHome);
  library.add(faLayerGroup);
  library.add(faMapMarkerAlt);
  library.add(faListUl);
  library.add(faLock);
  library.add(faPen);
  library.add(faPlus);
  library.add(faSearch);
  library.add(faSignOutAlt);
  library.add(faTachometerAlt);
  library.add(faTimes);
  library.add(faTools);
  library.add(faUser);
  library.add(faUsers);
  library.add(faWrench);
  dom.watch();
}

export default {
  include,
};
