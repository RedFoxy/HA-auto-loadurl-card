class AutoLoadUrlCard extends HTMLElement {
  set hass(hass) {
    this.style.display = 'none';

    const delay = this.config.delay_in_seconds * 1000;
    
    let sessionItem = window.AutoLoadUrlCardIntervalHandle;
    if(sessionItem) {
      const [previousPanelUrl, previousIntervalHandle] = sessionItem.split(':');
      if(previousPanelUrl !== hass.panelUrl) {
        clearInterval(previousIntervalHandle);
        sessionItem = null;
      }
    }
    if(!sessionItem) {
      const intervalHandle = setInterval(() => {
        const homeAssistant = document.querySelector('home-assistant');
        const root = homeAssistant.shadowRoot.querySelector('home-assistant-main').shadowRoot;
        const panel = root.querySelector('ha-panel-lovelace');
        if(!panel) { return; }
        const uiRoot = panel.shadowRoot.querySelector('hui-root');
        if(!uiRoot) { return; }
        const editMode = uiRoot.shadowRoot.querySelector('.edit-mode');
        if(editMode) { return; }

        window.location.href = this.config.url;
      }, delay);
      window.AutoLoadUrlCardIntervalHandle = `${hass.panelUrl}:${intervalHandle}`;
    }
  }

  setConfig(config) {
    if (!config.url || config.url === undefined || ! config.url.startsWith('http')) {
      throw new Error('You need to define a url that starts with http or https');
    }

    if(config.delay_in_seconds === undefined || typeof config.delay_in_seconds !== 'number' || !Number.isInteger(config.delay_in_seconds) || config.delay_in_seconds < 1) {
      throw new Error('You need to define delay_in_seconds (integer, starting from 1)');
    }
    this.config = config;
  }
}

customElements.define('auto-load-url-card', AutoLoadUrlCard);