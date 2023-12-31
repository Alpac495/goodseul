import { axiosPunch } from "../JWT/JWTConfig";

//서버 URL 변수 설정
const serverUrl = "http://dopeboyzclub.ddns.net:7780";

export const getCommunityTitleList = async (pageNumber: number) => {
    try {
        const res = await axiosPunch ({
            method: 'get',
            url: `${serverUrl}/api/lv1/board/list?category=자유게시판&page=${pageNumber}`,
        })
        console.log(res);

        return res;
    } catch (error) {
        console.error("리스트 조회 API 오류",error)
    }
}

export const getCommunityFashionTitleList = async (pageNumber: number) => {
    try {
        const res = await axiosPunch ({
            method: 'get',
            url: `${serverUrl}/api/lv1/board/list?category=의상/소품&page=${pageNumber}`,
        })
        console.log(res);

        return res;
    } catch (error) {
        console.error("리스트 조회 API 오류",error)
    }
}

export const getCommunityFoodTitleList = async (pageNumber: number) => {
    try {
        const res = await axiosPunch ({
            method: 'get',
            url: `${serverUrl}/api/lv1/board/list?category=식품&page=${pageNumber}`,
            
        })
        console.log(res);

        return res;
    } catch (error) {
        console.error("리스트 조회 API 오류",error)
    }
}

export const getCommunityDanceTitleList = async (pageNumber: number) => {
    try {
        const res = await axiosPunch ({
            method: 'get',
            url: `${serverUrl}/api/lv1/board/list?category=무용/악사&page=${pageNumber}`,
        })
        console.log(res);

        return res;
    } catch (error) {
        console.error("리스트 조회 API 오류",error)
    }
}