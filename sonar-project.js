const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
    serverUrl:'http://10.10.10.27:9000',
    options : {
        'sonar.projectDescription': 'This is a node JS project',
        'sonar.projectName':'elegant-latestNew',
        'sonar.projectKey':'elegant-latest',
        'sonar.login':'f0895645c91468164999129dabd5cf746a8e934c',
        'sonar.projectVersion':'1.0',
        'sonar.language':'js',
        ' sonar.sourceEncoding':'UTF-8',
        'sonar-sources':'.'
    },
}, () => {});