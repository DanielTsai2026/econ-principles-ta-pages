'use strict';

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.hidden = false;
  button.addEventListener('click', async () => {
    const command = document.getElementById(button.dataset.copy);
    const status = document.getElementById('copy-status');
    if (!command) return;
    try {
      await navigator.clipboard.writeText(command.textContent.trim());
      button.textContent = '已複製';
      status.textContent = '提問指令已複製。請貼到你使用的 AI 工具。';
      window.setTimeout(() => { button.textContent = '複製指令'; }, 2500);
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(command);
      selection.removeAllRanges();
      selection.addRange(range);
      button.textContent = '請手動複製';
      status.textContent = '無法自動複製，已選取指令。請使用系統的複製功能。';
    }
  });
});
