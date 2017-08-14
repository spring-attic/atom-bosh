const path = require('path');
const { JarLanguageClient } = require('pivotal-atom-languageclient-commons');
const PROPERTIES = require('../properties.json');

class BoshYamlClient extends JarLanguageClient {

    constructor() {
        //noinspection JSAnnotator
        super(
            PROPERTIES.jarUrl,
            path.join(__dirname, '..', 'server'),
            'bosh-language-server.jar'
        );
    }

    getGrammarScopes() {
        return ['source.bosh-deployment-manifest', 'source.bosh-cloud-config'];
    }

    getLanguageName() {
        return 'Bosh-YAML';
    }

    getServerName() {
        return 'Bosh-YAML';
    }

    launchVmArgs(version) {
        return [
            '-Dorg.slf4j.simpleLogger.logFile=bosh-yaml.log',
            '-Dorg.slf4j.simpleLogger.defaultLogLevel=debug',
        ];

    }

}

module.exports = new BoshYamlClient();
