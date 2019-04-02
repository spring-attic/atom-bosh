import { JavaProcessLanguageClient, JavaOptions } from '@pivotal-tools/atom-languageclient-commons';
import { ActiveServer } from 'atom-languageclient';
import { JVM } from '@pivotal-tools/jvm-launch-utils';
export declare class BoshYamlClient extends JavaProcessLanguageClient {
    constructor();
    postInitialization(server: ActiveServer): void;
    getGrammarScopes(): string[];
    getLanguageName(): string;
    getServerName(): string;
    activate(): void;
    launchVmArgs(jvm: JVM): Promise<string[]>;
    sendConfig(server: ActiveServer): void;
    getJavaOptions(): JavaOptions;
}
