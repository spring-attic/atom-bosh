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

    preInitialization(connection) {


        this.sendConfig(connection);

        this._disposable.add(atom.config.onDidChange('bosh-yaml.bosh.cli.command', (newValue) => {
            this.sendConfig(connection);
        }
        ));
        this._disposable.add(atom.config.onDidChange('bosh-yaml.bosh.cli.target', (newValue) => {
            this.sendConfig(connection);
        }
        ));
        this._disposable.add(atom.config.onDidChange('bosh-yaml.bosh.cli.timeout', (newValue) => {
            this.sendConfig(connection);
        }
        ));
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

    sendConfig(connection) {
       connection.didChangeConfiguration({ setting: atom.config.get('bosh-yaml.configuration') });
    }

}

module.exports = new BoshYamlClient();
