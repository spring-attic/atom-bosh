"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const atom_languageclient_commons_1 = require("@pivotal-tools/atom-languageclient-commons");
class BoshYamlClient extends atom_languageclient_commons_1.JavaProcessLanguageClient {
    constructor() {
        //noinspection JSAnnotator
        super(path.join(__dirname, '..', 'server'), 'bosh-language-server.jar');
    }
    postInitialization(server) {
        this.sendConfig(server);
        this._disposable.add(atom.config.observe('bosh-yaml', () => this.sendConfig(server)));
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
    activate() {
        require('atom-package-deps')
            .install('bosh-yaml')
            .then(() => console.debug('All dependencies installed, good to go'));
        super.activate();
    }
    launchVmArgs(jvm) {
        return Promise.resolve([
            '-Dorg.slf4j.simpleLogger.logFile=bosh-yaml.log',
            '-Dorg.slf4j.simpleLogger.defaultLogLevel=debug',
        ]);
    }
    sendConfig(server) {
        server.connection.didChangeConfiguration({ settings: atom.config.get('bosh-yaml') });
    }
}
exports.BoshYamlClient = BoshYamlClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9zaC15YW1sLWNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9ib3NoLXlhbWwtY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQTZCO0FBQzdCLDRGQUFxRjtBQUtyRixvQkFBNEIsU0FBUSx1REFBeUI7SUFFekQ7UUFDSSwwQkFBMEI7UUFDMUIsS0FBSyxDQUNELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsRUFDcEMsMEJBQTBCLENBQzdCLENBQUM7SUFDTixDQUFDO0lBRUQsa0JBQWtCLENBQUMsTUFBb0I7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQixJQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUVELGdCQUFnQjtRQUNaLE9BQU8sQ0FBQyxpQ0FBaUMsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxlQUFlO1FBQ1gsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUVELGFBQWE7UUFDVCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBRUQsUUFBUTtRQUNKLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQzthQUN2QixPQUFPLENBQUMsV0FBVyxDQUFDO2FBQ3BCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQztRQUN6RSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUFRO1FBQ2pCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNuQixnREFBZ0Q7WUFDaEQsZ0RBQWdEO1NBQ25ELENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBb0I7UUFDM0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekYsQ0FBQztDQUVKO0FBOUNELHdDQThDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQge0phdmFQcm9jZXNzTGFuZ3VhZ2VDbGllbnR9IGZyb20gJ0BwaXZvdGFsLXRvb2xzL2F0b20tbGFuZ3VhZ2VjbGllbnQtY29tbW9ucyc7XG5pbXBvcnQge0FjdGl2ZVNlcnZlcn0gZnJvbSAnYXRvbS1sYW5ndWFnZWNsaWVudCc7XG5pbXBvcnQge0pWTX0gZnJvbSAnQHBpdm90YWwtdG9vbHMvanZtLWxhdW5jaC11dGlscyc7XG5cblxuZXhwb3J0IGNsYXNzIEJvc2hZYW1sQ2xpZW50IGV4dGVuZHMgSmF2YVByb2Nlc3NMYW5ndWFnZUNsaWVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy9ub2luc3BlY3Rpb24gSlNBbm5vdGF0b3JcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4nLCAnc2VydmVyJyksXG4gICAgICAgICAgICAnYm9zaC1sYW5ndWFnZS1zZXJ2ZXIuamFyJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIHBvc3RJbml0aWFsaXphdGlvbihzZXJ2ZXI6IEFjdGl2ZVNlcnZlcikge1xuICAgICAgICB0aGlzLnNlbmRDb25maWcoc2VydmVyKTtcbiAgICAgICAgKDxhbnk+dGhpcykuX2Rpc3Bvc2FibGUuYWRkKGF0b20uY29uZmlnLm9ic2VydmUoJ2Jvc2gteWFtbCcsICgpID0+IHRoaXMuc2VuZENvbmZpZyhzZXJ2ZXIpKSk7XG4gICAgfVxuXG4gICAgZ2V0R3JhbW1hclNjb3BlcygpIHtcbiAgICAgICAgcmV0dXJuIFsnc291cmNlLmJvc2gtZGVwbG95bWVudC1tYW5pZmVzdCcsICdzb3VyY2UuYm9zaC1jbG91ZC1jb25maWcnXTtcbiAgICB9XG5cbiAgICBnZXRMYW5ndWFnZU5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnQm9zaC1ZQU1MJztcbiAgICB9XG5cbiAgICBnZXRTZXJ2ZXJOYW1lKCkge1xuICAgICAgICByZXR1cm4gJ0Jvc2gtWUFNTCc7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIHJlcXVpcmUoJ2F0b20tcGFja2FnZS1kZXBzJylcbiAgICAgICAgICAgIC5pbnN0YWxsKCdib3NoLXlhbWwnKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5kZWJ1ZygnQWxsIGRlcGVuZGVuY2llcyBpbnN0YWxsZWQsIGdvb2QgdG8gZ28nKSk7XG4gICAgICAgIHN1cGVyLmFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgbGF1bmNoVm1BcmdzKGp2bTogSlZNKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtcbiAgICAgICAgICAgICctRG9yZy5zbGY0ai5zaW1wbGVMb2dnZXIubG9nRmlsZT1ib3NoLXlhbWwubG9nJyxcbiAgICAgICAgICAgICctRG9yZy5zbGY0ai5zaW1wbGVMb2dnZXIuZGVmYXVsdExvZ0xldmVsPWRlYnVnJyxcbiAgICAgICAgXSk7XG5cbiAgICB9XG5cbiAgICBzZW5kQ29uZmlnKHNlcnZlcjogQWN0aXZlU2VydmVyKSB7XG4gICAgICAgIHNlcnZlci5jb25uZWN0aW9uLmRpZENoYW5nZUNvbmZpZ3VyYXRpb24oeyBzZXR0aW5nczogYXRvbS5jb25maWcuZ2V0KCdib3NoLXlhbWwnKSB9KTtcbiAgICB9XG5cbn0iXX0=