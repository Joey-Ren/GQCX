var dis = {
    "data": {
        "state": "ok",
        "message": "",
        "special": "",
        "vipMessage": "",
        "isLogin": 0,
        "data": {
            "nodes": [
                {
                    "id": "1",
                    "labels": [
                        "Company"
                    ],
                    "properties": {
                        "name": "河南水利投资集团有限公司（总公司）",
                        "ntype": "s"
                    }
                },
                {
                    "id": "1.1",
                    "labels": [
                        "Lawsuit"
                    ],
                    "properties": {
                        "name": "河南水利投资集团有限公司",
                        "ntype": "s"
                    }
                },
                {
                    "id": "1.2",
                    "labels": [
                        "Lawsuit"
                    ],
                    "properties": {
                        "name": "河南水投水土资源开发有限公司",
                        "ntype": "s"
                    }
                },
                {
                    "id": "1.3",
                    "labels": [
                        "Lawsuit"
                    ],
                    "properties": {
                        "name": "河南省江河水电开发有限公司",
                        "ntype": "s"
                    }
                }
            ],
            "relationships": [
                {
                    "id": "243389423",
                    "type": "INVEST_H",
                    "startNode": "1.1",
                    "endNode": "1",
                    "properties": {
                        "labels": [
                            "参股14%"
                        ]
                    }
                },
                {
                    "id": "243389423",
                    "type": "INVEST_H",
                    "startNode": "1.2",
                    "endNode": "1",
                    "properties": {
                        "labels": [
                            "参股37%"
                        ]
                    }
                },
                {
                    "id": "243389423",
                    "type": "INVEST_H",
                    "startNode": "1.3",
                    "endNode": "1",
                    "properties": {
                        "labels": [
                            "参股49%"
                        ]
                    }
                }
            ]
        }
    },
    "status": 200,
    "config": {
        "method": "GET",
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "cache": false,
        "headers": {
            "Accept": "application/json, text/plain, */*"
        },
        "url": "/dis/getInfoById/4214151.json?"
    },
    "statusText": "OK"
}