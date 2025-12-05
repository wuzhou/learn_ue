import * as ue from "ue";
import { UIManager } from "./UIManager";
import { MixinManager } from "./MixinManager";

class Application {
    private static instance: Application;

    private isInitialized: boolean;
    private uiManager: UIManager;
    private mixinManager: MixinManager;

    public static GetInstance(): Application {
        if (!Application.instance) {
            Application.instance = new Application();
        }
        return Application.instance;
    }

    public Init(gameInstance: ue.TsGameInstance) {
        if (this.isInitialized) {
            return;
        }
        this.uiManager = new UIManager(this, gameInstance);
        this.mixinManager = new MixinManager();

        this.isInitialized = true;
    }

    public LoadUI(uiName: string) {
        if (!this.isInitialized) {
            return;
        }
        this.uiManager.LoadUI(uiName);
    }

    public MixinBeforeLevel(levelIndex : number) {
        if (!this.isInitialized) {
            return;
        }

        this.mixinManager.MixinBeforeLevel(levelIndex);
    }
}

export { Application };