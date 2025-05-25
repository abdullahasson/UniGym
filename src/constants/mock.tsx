// Players
export const player = [
    {
        id : "101",
        name : "مائل الحسن",
        gender : "male",
        email : "malah@gmail.com",
        imgForFace : "https://avatars.githubusercontent.com/u/100283151?v=4",
        password : "12345678",
        joinDate : "2023-03-15",
        bodyInfo : {
            height : 180,
            weight : 80,
            imgForBody : "https://avatars.githubusercontent.com/u/100283151?v=4",
            age : 25,
            bmi : 23.5,
            bodyfat : 15,
            muslesMass : 60,
            fatMass : 30,
            level : "أول",
            StartTheLevel : "2023-03-15",
            FinishTheLevel : "2023-4-15"
        },
        subscriptions : {
            thisMonth : true,
            lastMonths : false,
            receipt : {
                operator : true
            },
            lastPayment : {
                date : "2023-03-15",
                amount : 60000
            },
            nextPayment : {
                date : "2023-03-30",
                amount : 60000
            }
        },
        requestForSchedule : false
    },
    {
        id : "102",
        name : "أحمد علي",
        gender : "male",
        email : "ahmed.ali@example.com",
        imgForFace : "https://example.com/avatars/ahmed-ali.jpg",
        password : "12345678",
        joinDate : "2023-4-15",
        bodyInfo : {
            height : 175,
            weight : 75,
            imgForBody : "https://example.com/body-scans/ahmed-ali.jpg",
            age : 28,
            bmi : 24.5,
            bodyfat : 18,
            muslesMass : 55,
            fatMass : 25,
            level : "ثاني",
            StartTheLevel : "2023-4-1",
            FinishTheLevel : "2023-5-1"
        },
        subscriptions : {
            thisMonth : true,
            lastMonths : true,
            receipt : {
                operator : true
            },
            lastPayment : {
                date : "2023-4-1",
                amount : 60000
            },
            nextPayment : {
                date : "2023-4-28",
                amount : 60000
            }
        },
        requestForSchedule : true
    },
    {
        id : "103",
        name : "فاطمة محمد",
        gender : "male",
        email : "fatima.mohamed@example.com",
        imgForFace : "https://example.com/avatars/fatima.jpg",
        password : "12345678",
        joinDate : "2023-5-10",
        bodyInfo : {
            height : 165,
            weight : 62,
            imgForBody : "https://example.com/body-scans/fatima.jpg",
            age : 22,
            bmi : 22.8,
            bodyfat : 22,
            muslesMass : 48,
            fatMass : 24,
            level : "ثالث",
            StartTheLevel : "2023-5-1",
            FinishTheLevel : "2023-06-1"
        },
        subscriptions : {
            thisMonth : true,
            lastMonths : true,
            receipt : {
                operator : false
            },
            lastPayment : {
                date : "2023-5-5",
                amount : 65000
            },
            nextPayment : {
                date : "2023-5-25",
                amount : 65000
            }
        },
        requestForSchedule : true
    },
    {
        id : "104",
        name : "خالد عبدالله",
        gender : "male",
        email : "khalid.abdullah@example.com",
        imgForFace : "https://example.com/avatars/khalid.jpg",
        password : "12345678",
        joinDate : "2023-06-1",
        bodyInfo : {
            height : 190,
            weight : 95,
            imgForBody : "https://example.com/body-scans/khalid.jpg",
            age : 35,
            bmi : 26.3,
            bodyfat : 20,
            muslesMass : 70,
            fatMass : 35,
            level : "رابع",
            StartTheLevel : "2023-06-1",
            FinishTheLevel : "2023-07-1"
        },
        subscriptions : {
            thisMonth : false,
            lastMonths : true,
            receipt : {
                operator : true
            },
            lastPayment : {
                date : "2023-5-28",
                amount : 60000
            },
            nextPayment : {
                date : "2023-06-15",
                amount : 60000
            }
        },
        requestForSchedule : false
    },
    {
        id : "105",
        name : "نورة أحمد",
        gender : "male",
        email : "noura.ahmed@example.com",
        imgForFace : "https://example.com/avatars/noura.jpg",
        password : "12345678",
        joinDate : "2023-4-22",
        bodyInfo : {
            height : 170,
            weight : 68,
            imgForBody : "https://example.com/body-scans/noura.jpg",
            age : 30,
            bmi : 23.5,
            bodyfat : 25,
            muslesMass : 50,
            fatMass : 27,
            level : "خامس",
            StartTheLevel : "2023-4-20",
            FinishTheLevel : "2023-5-20"
        },
        subscriptions : {
            thisMonth : true,
            lastMonths : false,
            receipt : {
                operator : true
            },
            lastPayment : {
                date : "2023-4-20",
                amount : 62000
            },
            nextPayment : {
                date : "2025-4-25",
                amount : 62000
            }
        },
        requestForSchedule : true
    },
    {
        id : "106",
        name : "أحمد علي",
        gender : "male",
        email : "ahmed.ali@example.com",
        imgForFace : "https://example.com/avatars/ahmed-ali.jpg",
        password : "12345678",
        joinDate : "2023-4-15",
        bodyInfo : {
            height : 175,
            weight : 75,
            imgForBody : "https://example.com/body-scans/ahmed-ali.jpg",
            age : 28,
            bmi : 24.5,
            bodyfat : 18,
            muslesMass : 55,
            fatMass : 25,
            level : "ثاني",
            StartTheLevel : "2023-4-1",
            FinishTheLevel : "2023-5-1"
        },
        subscriptions : {
            thisMonth : true,
            lastMonths : true,
            receipt : {
                operator : true
            },
            lastPayment : {
                date : "2023-4-1",
                amount : 60000
            },
            nextPayment : {
                date : "2025-4-25",
                amount : 60000
            }
        },
        requestForSchedule : true
    },
    {
        id : "111",
        name : "محمد الأمين",
        gender : "male",
        email : "mohamed.almein@gmail.com",
        imgForFace : "https://example.com/avatars/mohamed-almein.jpg",
        password : "12345678",
        joinDate : "2023-4-15",
        bodyInfo : {
            height : 175,
            weight : 75,
            imgForBody : "https://example.com/body-scans/mohamed-almein.jpg",
            age : 28,
            bmi : 24.5,
            bodyfat : 18,
            muslesMass : 55,
            fatMass : 25,
            level : "ثاني",
            StartTheLevel : "2023-4-1",
            FinishTheLevel : "2023-5-1"
        },
        subscriptions : {
            thisMonth : true,
            lastMonths : true,
            receipt : {
                operator : true
            },
            lastPayment : {
                date : "2023-4-1",
                amount : 60000
            },
            nextPayment : {
                date : "2025-4-25",
                amount : 60000
            }
        },
        requestForSchedule : true
    },
    {
        id : "112",
        name : "فواز العرنجي",
        gender : "male",
        email : "foazaelr@gmail.com",
        imgForFace : "https://avatars.dicebear.com/api/male/avatar-initials.svg?seed=Foaz",
        password : "123456",
        joinDate : "2021-4-25",
        bodyInfo : {
            height : 180,
            weight : 70,
            imgForBody : "https://avatars.dicebear.com/api/male/body-shape.svg?seed=Foaz",
            age : 25,
            bmi : 25.5,
            bodyfat : 0.5,
            muslesMass : 0.5,
            fatMass : 0.5,
            level : "متوسط",
            StartTheLevel : "2021-4-25",
            FinishTheLevel : "2021-4-25"
        },
        subscriptions : {
            thisMonth : true,
            lastMonth : false,
            receipt : {
                operator : true
            },
            lastPayment : {
                date : "2025-4-26",
                amount : 60000
            },
            nextPayment : {
                date : "2025-4-26",
                amount : 60000
            }
        },
        requestForSchedule : true
    }
]