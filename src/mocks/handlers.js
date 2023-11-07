import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/feed/posts", () => {
    return HttpResponse.json([
      {
        userImg:
          "https://cdn.pixabay.com/photo/2022/02/04/12/49/woman-6992691_640.jpg",
        userId: "abc_123",
        date: "2023-10-27",
        location: "서울시 강남구",
        temperature: 21,
        imgs: {
          img1: "https://cdn.pixabay.com/photo/2018/10/06/11/22/coffee-3727673_640.jpg",
          img2: "https://cdn.pixabay.com/photo/2017/08/01/08/16/couple-2563424_640.jpg",
          img3: "https://cdn.pixabay.com/photo/2016/11/30/14/08/cafe-1872888_640.jpg",
        },
        hearts: {
          number: 3,
          lists: [
            {
              userImg:
                "https://cdn.pixabay.com/photo/2023/07/11/00/02/mango-smoothie-8119280_640.jpg",
              userId: "aaa_111",
            },
            {
              userImg:
                "https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_640.jpg",
              userId: "bbb_222",
            },
            {
              userImg:
                "https://cdn.pixabay.com/photo/2018/10/07/00/46/surfer-3729052_640.jpg",
              userId: "ccc_333",
            },
          ],
        },
        text: "커피 좋아! 커피 최고!",
        tags: ["#커피", "#카페"],
      },
      {
        userImg:
          "https://cdn.pixabay.com/photo/2023/07/11/00/02/mango-smoothie-8119280_640.jpg",
        userId: "aaa_111",
        date: "2023-10-27",
        location: "부산 해운구",
        temperature: 22,
        imgs: {
          img1: "https://cdn.pixabay.com/photo/2013/12/17/01/41/haeundae-beach-229490_1280.jpg",
          img2: "https://cdn.pixabay.com/vimeo/176282263/4006.mp4?width=640&hash=f116cbd22359c2ce9290712bf2bfe4806af7a597",
        },
        hearts: {
          number: 4,
          lists: [
            {
              userImg:
                "https://cdn.pixabay.com/photo/2017/09/01/12/52/girl-2704119_640.jpg",
              userId: "ddd_444",
            },
            {
              userImg:
                "https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_640.jpg",
              userId: "bbb_222",
            },
            {
              userImg:
                "https://cdn.pixabay.com/photo/2018/10/07/00/46/surfer-3729052_640.jpg",
              userId: "ccc_333",
            },
            {
              userImg:
                "https://cdn.pixabay.com/photo/2016/01/13/15/03/mirror-1138098_640.jpg",
              userId: "eee_555",
            },
          ],
        },
        text: "2박 3일 부산 여행! 23.10.24 - 23.10.26",
        tags: ["#여행", "#부산", "#해운대", "바다"],
      },
      {
        userImg:
          "https://cdn.pixabay.com/photo/2016/01/13/15/03/mirror-1138098_640.jpg",
        userId: "eee_555",
        date: "2023-10-20",
        location: "경상남도 창원",
        temperature: 25,
        imgs: {
          img1: "https://cdn.pixabay.com/photo/2013/12/17/01/41/haeundae-beach-229490_1280.jpg",
          img2: "https://cdn.pixabay.com/vimeo/176282263/4006.mp4?width=640&hash=f116cbd22359c2ce9290712bf2bfe4806af7a597",
        },
        hearts: {
          number: 0,
          lists: [],
        },
        text: null,
        tags: [],
      },
      {
        userImg:
          "https://cdn.pixabay.com/photo/2023/09/20/04/04/sea-urchin-8263832_640.jpg",
        userId: "abc_111",
        date: "2023-10-25",
        location: "전라북도 전주시",
        temperature: 22,
        imgs: {
          img1: "https://cdn.pixabay.com/photo/2020/02/28/12/40/bibimbap-4887394_640.jpg",
          img2: "https://cdn.pixabay.com/photo/2023/02/27/13/57/traditional-village-7818476_640.jpg",
          img3: "https://cdn.pixabay.com/vimeo/764361560/135669.mp4?width=1280&hash=ee82fe7ba4c88556bd0fe927ec669c5342540bf5",
        },
        hearts: {
          number: 3,
          lists: [
            {
              userImg:
                "https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_640.jpg",
              userId: "bbb_222",
            },
            {
              userImg:
                "https://cdn.pixabay.com/photo/2018/10/07/00/46/surfer-3729052_640.jpg",
              userId: "ccc_333",
            },
            {
              userImg:
                "https://cdn.pixabay.com/photo/2016/01/13/15/03/mirror-1138098_640.jpg",
              userId: "eee_555",
            },
          ],
        },
        text: "2박 3일 전주 여행 오랜만에 여행갔다! 전라북도 전주여행 오랜만에 여행갔다! 전라북도 전주여행 오랜만에 여행갔다! 전라북도 전주여행 오랜만에 여행갔다! 전라북도 전주여행 오랜만에 여행갔다! 전라북도 전주여행 오랜만에 여행갔다! 전라북도 전주여행",
        tags: ["#전주", "#여행", "#비빔밥"],
      },
      {
        userImg:
          "https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_640.jpg",
        userId: "gasga_fwewg",
        date: "2023-10-25",
        location: "경상북도 경주시",
        temperature: 29,
        imgs: {
          img1: "https://cdn.pixabay.com/photo/2020/12/01/09/07/womens-5793436_640.jpg",
          img2: "https://cdn.pixabay.com/photo/2015/08/10/16/55/buddhism-882879_1280.jpg",
        },
        hearts: {
          number: 5,
          lists: [
            {
              userImg:
                "https://cdn.pixabay.com/photo/2017/09/01/12/52/girl-2704119_640.jpg",
              userId: "ddd_444",
            },
            {
              userImg:
                "https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_640.jpg",
              userId: "bbb_222",
            },
            {
              userImg:
                "https://cdn.pixabay.com/photo/2018/10/07/00/46/surfer-3729052_640.jpg",
              userId: "ccc_333",
            },
            {
              userImg:
                "https://cdn.pixabay.com/photo/2016/01/13/15/03/mirror-1138098_640.jpg",
              userId: "eee_555",
            },
            {
              userImg:
                "https://cdn.pixabay.com/photo/2023/09/20/04/04/sea-urchin-8263832_640.jpg",
              userId: "abc_111",
            },
          ],
        },
        text: "경주로 놀러갔다. 초등학생 때 이후로 처음 왔다. ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ 한복도 입었다.",
        tags: ["#여행", "#경주", "#석굴암", "불국사", "한복"],
      },
      {
        userImg:
          "https://cdn.pixabay.com/photo/2022/02/04/12/49/woman-6992691_640.jpg",
        userId: "abc_123",
        date: "2023-10-24",
        location: "서울시 강남구",
        temperature: 27,
        imgs: {
          img1: "https://cdn.pixabay.com/photo/2018/10/06/11/22/coffee-3727673_640.jpg",
          img2: "https://cdn.pixabay.com/photo/2017/08/01/08/16/couple-2563424_640.jpg",
          img3: "https://cdn.pixabay.com/photo/2016/11/30/14/08/cafe-1872888_640.jpg",
        },
        hearts: {
          number: 3,
          lists: [
            {
              userImg:
                "https://cdn.pixabay.com/photo/2023/07/11/00/02/mango-smoothie-8119280_640.jpg",
              userId: "aaa_111",
            },
            {
              userImg:
                "https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_640.jpg",
              userId: "bbb_222",
            },
            {
              userImg:
                "https://cdn.pixabay.com/photo/2018/10/07/00/46/surfer-3729052_640.jpg",
              userId: "ccc_333",
            },
          ],
        },
        text: "커피 좋아! 커피 최고!",
        tags: ["#커피", "#카페"],
      },
      {
        userImg:
          "https://cdn.pixabay.com/photo/2023/07/11/00/02/mango-smoothie-8119280_640.jpg",
        userId: "aaa_111",
        date: "2023-10-24",
        location: "부산 해운구",
        temperature: 29,
        imgs: {
          img1: "https://cdn.pixabay.com/photo/2013/12/17/01/41/haeundae-beach-229490_1280.jpg",
          img2: "https://cdn.pixabay.com/vimeo/176282263/4006.mp4?width=640&hash=f116cbd22359c2ce9290712bf2bfe4806af7a597",
        },
        hearts: {
          number: 4,
          lists: [
            {
              userImg:
                "https://cdn.pixabay.com/photo/2017/09/01/12/52/girl-2704119_640.jpg",
              userId: "ddd_444",
            },
            {
              userImg:
                "https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_640.jpg",
              userId: "bbb_222",
            },
            {
              userImg:
                "https://cdn.pixabay.com/photo/2018/10/07/00/46/surfer-3729052_640.jpg",
              userId: "ccc_333",
            },
            {
              userImg:
                "https://cdn.pixabay.com/photo/2016/01/13/15/03/mirror-1138098_640.jpg",
              userId: "eee_555",
            },
          ],
        },
        text: "2박 3일 부산 여행! 23.10.24 - 23.10.26",
        tags: ["#여행", "#부산", "#해운대", "바다"],
      },
      {
        userImg:
          "https://cdn.pixabay.com/photo/2016/01/13/15/03/mirror-1138098_640.jpg",
        userId: "eee_555",
        date: "2023-10-24",
        location: "경상남도 창원",
        temperature: 28,
        imgs: {
          img1: "https://cdn.pixabay.com/photo/2013/12/17/01/41/haeundae-beach-229490_1280.jpg",
          img2: "https://cdn.pixabay.com/vimeo/176282263/4006.mp4?width=640&hash=f116cbd22359c2ce9290712bf2bfe4806af7a597",
        },
        hearts: {
          number: 0,
          lists: [],
        },
        text: null,
        tags: [],
      },
      {
        userImg:
          "https://cdn.pixabay.com/photo/2023/09/20/04/04/sea-urchin-8263832_640.jpg",
        userId: "abc_111",
        date: "2023-10-23",
        location: "전라북도 전주시",
        temperature: 31,
        imgs: {
          img1: "https://cdn.pixabay.com/photo/2020/02/28/12/40/bibimbap-4887394_640.jpg",
          img2: "https://cdn.pixabay.com/photo/2023/02/27/13/57/traditional-village-7818476_640.jpg",
          img3: "https://cdn.pixabay.com/vimeo/764361560/135669.mp4?width=1280&hash=ee82fe7ba4c88556bd0fe927ec669c5342540bf5",
        },
        hearts: {
          number: 3,
          lists: [
            {
              userImg:
                "https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_640.jpg",
              userId: "bbb_222",
            },
            {
              userImg:
                "https://cdn.pixabay.com/photo/2018/10/07/00/46/surfer-3729052_640.jpg",
              userId: "ccc_333",
            },
            {
              userImg:
                "https://cdn.pixabay.com/photo/2016/01/13/15/03/mirror-1138098_640.jpg",
              userId: "eee_555",
            },
          ],
        },
        text: "2박 3일 전주 여행 오랜만에 여행갔다! 전라북도 전주여행 오랜만에 여행갔다! 전라북도 전주여행 오랜만에 여행갔다! 전라북도 전주여행 오랜만에 여행갔다! 전라북도 전주여행 오랜만에 여행갔다! 전라북도 전주여행 오랜만에 여행갔다! 전라북도 전주여행",
        tags: ["#전주", "#여행", "#비빔밥"],
      },
      {
        userImg:
          "https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_640.jpg",
        userId: "gasga_fwewg",
        date: "2023-10-22",
        location: "경상북도 경주시",
        temperature: 36,
        imgs: {
          img1: "https://cdn.pixabay.com/photo/2020/12/01/09/07/womens-5793436_640.jpg",
          img2: "https://cdn.pixabay.com/photo/2015/08/10/16/55/buddhism-882879_1280.jpg",
        },
        hearts: {
          number: 4,
          lists: [
            {
              userImg:
                "https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_640.jpg",
              userId: "bbb_222",
            },
            {
              userImg:
                "https://cdn.pixabay.com/photo/2018/10/07/00/46/surfer-3729052_640.jpg",
              userId: "ccc_333",
            },
            {
              userImg:
                "https://cdn.pixabay.com/photo/2016/01/13/15/03/mirror-1138098_640.jpg",
              userId: "eee_555",
            },
            {
              userImg:
                "https://cdn.pixabay.com/photo/2023/09/20/04/04/sea-urchin-8263832_640.jpg",
              userId: "abc_111",
            },
          ],
        },
        text: "경주로 놀러갔다. 초등학생 때 이후로 처음 왔다. ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ 한복도 입었다.",
        tags: ["#여행", "#경주", "#석굴암", "불국사", "한복"],
      },
    ]);
  }),

  http.get("/api/slide", () => {
    return HttpResponse.json({
      img1: "https://cdn.pixabay.com/photo/2015/03/03/05/56/avenue-656969_640.jpg",
      img2: "https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641_640.jpg",
      img3: "https://cdn.pixabay.com/photo/2016/02/27/18/05/trees-1225983_640.jpg",
      img4: "https://cdn.pixabay.com/photo/2013/05/15/06/10/autumn-111315_640.jpg",
      img5: "https://cdn.pixabay.com/vimeo/176282263/4006.mp4?width=640&hash=f116cbd22359c2ce9290712bf2bfe4806af7a597",
    });
  }),
];
