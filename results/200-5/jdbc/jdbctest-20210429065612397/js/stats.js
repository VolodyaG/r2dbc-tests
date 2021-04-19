var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12037",
        "ok": "11996",
        "ko": "41"
    },
    "minResponseTime": {
        "total": "63",
        "ok": "63",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "45109",
        "ok": "45109",
        "ko": "10001"
    },
    "meanResponseTime": {
        "total": "2022",
        "ok": "1994",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "3373",
        "ok": "3346",
        "ko": "0"
    },
    "percentiles1": {
        "total": "942",
        "ok": "940",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "1565",
        "ok": "1552",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "8973",
        "ok": "8544",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "17035",
        "ok": "17036",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4655,
    "percentage": 39
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3152,
    "percentage": 26
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4189,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "count": 41,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "89.163",
        "ok": "88.859",
        "ko": "0.304"
    }
},
contents: {
"req_get-random-auth-60dd5": {
        type: "REQUEST",
        name: "Get Random Author",
path: "Get Random Author",
pathFormatted: "req_get-random-auth-60dd5",
stats: {
    "name": "Get Random Author",
    "numberOfRequests": {
        "total": "12037",
        "ok": "11996",
        "ko": "41"
    },
    "minResponseTime": {
        "total": "63",
        "ok": "63",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "45109",
        "ok": "45109",
        "ko": "10001"
    },
    "meanResponseTime": {
        "total": "2022",
        "ok": "1994",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "3373",
        "ok": "3346",
        "ko": "0"
    },
    "percentiles1": {
        "total": "942",
        "ok": "940",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "1565",
        "ok": "1552",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "8973",
        "ok": "8544",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "17035",
        "ok": "17036",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4655,
    "percentage": 39
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3152,
    "percentage": 26
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4189,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "count": 41,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "89.163",
        "ok": "88.859",
        "ko": "0.304"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
