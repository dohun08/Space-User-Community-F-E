import { useRecoilValue } from 'recoil';
import { Navigate, Outlet } from 'react-router-dom';
import { authAtom } from '../recoil/authAtom';

const AdminRoute = () => {
    const auth = useRecoilValue(authAtom);

    // 관리자 권한이 없으면 접근 차단
    if (!auth.isAdmin) {
        alert("관리자만 접근할 수 있습니다.");
        return <Navigate to="/" replace />;
    }
    return <Outlet />;
};

export default AdminRoute;

//isAdmin이 아니라면 접근 제한하기