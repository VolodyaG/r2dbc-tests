var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8010",
        "ok": "7809",
        "ko": "201"
    },
    "minResponseTime": {
        "total": "51",
        "ok": "51",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "59920",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "3307",
        "ok": "2417",
        "ko": "37861"
    },
    "standardDeviation": {
        "total": "8187",
        "ok": "4622",
        "ko": "24836"
    },
    "percentiles1": {
        "total": "1321",
        "ok": "1301",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "2055",
        "ok": "1927",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "10125",
        "ok": "7311",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60000",
        "ok": "24858",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1025,
    "percentage": 13
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2271,
    "percentage": 28
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4513,
    "percentage": 56
},
    "group4": {
    "name": "failed",
    "count": 201,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "48.545",
        "ok": "47.327",
        "ko": "1.218"
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
        "total": "8010",
        "ok": "7809",
        "ko": "201"
    },
    "minResponseTime": {
        "total": "51",
        "ok": "51",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "59920",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "3307",
        "ok": "2417",
        "ko": "37861"
    },
    "standardDeviation": {
        "total": "8187",
        "ok": "4622",
        "ko": "24836"
    },
    "percentiles1": {
        "total": "1321",
        "ok": "1301",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "2055",
        "ok": "1927",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "10125",
        "ok": "7311",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60000",
        "ok": "24858",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1025,
    "percentage": 13
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2271,
    "percentage": 28
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4513,
    "percentage": 56
},
    "group4": {
    "name": "failed",
    "count": 201,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "48.545",
        "ok": "47.327",
        "ko": "1.218"
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
