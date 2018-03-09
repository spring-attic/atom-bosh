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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9zaC15YW1sLWNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9ib3NoLXlhbWwtY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQTZCO0FBQzdCLDRGQUFxRjtBQUtyRixvQkFBNEIsU0FBUSx1REFBeUI7SUFFekQ7UUFDSSwwQkFBMEI7UUFDMUIsS0FBSyxDQUNELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsRUFDcEMsMEJBQTBCLENBQzdCLENBQUM7SUFDTixDQUFDO0lBRUQsa0JBQWtCLENBQUMsTUFBb0I7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQixJQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUVELGdCQUFnQjtRQUNaLE1BQU0sQ0FBQyxDQUFDLGlDQUFpQyxFQUFFLDBCQUEwQixDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELGVBQWU7UUFDWCxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxhQUFhO1FBQ1QsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBRUQsUUFBUTtRQUNKLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQzthQUN2QixPQUFPLENBQUMsV0FBVyxDQUFDO2FBQ3BCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQztRQUN6RSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUFRO1FBQ2pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ25CLGdEQUFnRDtZQUNoRCxnREFBZ0Q7U0FDbkQsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFvQjtRQUMzQixNQUFNLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDO0NBRUo7QUE5Q0Qsd0NBOENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7SmF2YVByb2Nlc3NMYW5ndWFnZUNsaWVudH0gZnJvbSAnQHBpdm90YWwtdG9vbHMvYXRvbS1sYW5ndWFnZWNsaWVudC1jb21tb25zJztcbmltcG9ydCB7QWN0aXZlU2VydmVyfSBmcm9tICdhdG9tLWxhbmd1YWdlY2xpZW50JztcbmltcG9ydCB7SlZNfSBmcm9tICdAcGl2b3RhbC10b29scy9qdm0tbGF1bmNoLXV0aWxzJztcblxuXG5leHBvcnQgY2xhc3MgQm9zaFlhbWxDbGllbnQgZXh0ZW5kcyBKYXZhUHJvY2Vzc0xhbmd1YWdlQ2xpZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL25vaW5zcGVjdGlvbiBKU0Fubm90YXRvclxuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIHBhdGguam9pbihfX2Rpcm5hbWUsICcuLicsICdzZXJ2ZXInKSxcbiAgICAgICAgICAgICdib3NoLWxhbmd1YWdlLXNlcnZlci5qYXInXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcG9zdEluaXRpYWxpemF0aW9uKHNlcnZlcjogQWN0aXZlU2VydmVyKSB7XG4gICAgICAgIHRoaXMuc2VuZENvbmZpZyhzZXJ2ZXIpO1xuICAgICAgICAoPGFueT50aGlzKS5fZGlzcG9zYWJsZS5hZGQoYXRvbS5jb25maWcub2JzZXJ2ZSgnYm9zaC15YW1sJywgKCkgPT4gdGhpcy5zZW5kQ29uZmlnKHNlcnZlcikpKTtcbiAgICB9XG5cbiAgICBnZXRHcmFtbWFyU2NvcGVzKCkge1xuICAgICAgICByZXR1cm4gWydzb3VyY2UuYm9zaC1kZXBsb3ltZW50LW1hbmlmZXN0JywgJ3NvdXJjZS5ib3NoLWNsb3VkLWNvbmZpZyddO1xuICAgIH1cblxuICAgIGdldExhbmd1YWdlTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdCb3NoLVlBTUwnO1xuICAgIH1cblxuICAgIGdldFNlcnZlck5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnQm9zaC1ZQU1MJztcbiAgICB9XG5cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgcmVxdWlyZSgnYXRvbS1wYWNrYWdlLWRlcHMnKVxuICAgICAgICAgICAgLmluc3RhbGwoJ2Jvc2gteWFtbCcpXG4gICAgICAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmRlYnVnKCdBbGwgZGVwZW5kZW5jaWVzIGluc3RhbGxlZCwgZ29vZCB0byBnbycpKTtcbiAgICAgICAgc3VwZXIuYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICBsYXVuY2hWbUFyZ3MoanZtOiBKVk0pOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW1xuICAgICAgICAgICAgJy1Eb3JnLnNsZjRqLnNpbXBsZUxvZ2dlci5sb2dGaWxlPWJvc2gteWFtbC5sb2cnLFxuICAgICAgICAgICAgJy1Eb3JnLnNsZjRqLnNpbXBsZUxvZ2dlci5kZWZhdWx0TG9nTGV2ZWw9ZGVidWcnLFxuICAgICAgICBdKTtcblxuICAgIH1cblxuICAgIHNlbmRDb25maWcoc2VydmVyOiBBY3RpdmVTZXJ2ZXIpIHtcbiAgICAgICAgc2VydmVyLmNvbm5lY3Rpb24uZGlkQ2hhbmdlQ29uZmlndXJhdGlvbih7IHNldHRpbmdzOiBhdG9tLmNvbmZpZy5nZXQoJ2Jvc2gteWFtbCcpIH0pO1xuICAgIH1cblxufSJdfQ==