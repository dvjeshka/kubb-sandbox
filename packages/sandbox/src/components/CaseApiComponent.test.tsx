import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from 'vitest-browser-react'
import CaseApiComponent from './CaseApiComponent';
import { LIST_DTO } from '../mocks/data';
import { getList } from 'kubb-lib/api/getList';
import { deleteItem } from 'kubb-lib/api/deleteItem';

vi.mock('kubb-lib/api/getList');
vi.mock('kubb-lib/api/deleteItem');

describe('CaseApiComponent', () => {
  const mockGetList = vi.mocked(getList);
  const mockDeleteItem = vi.mocked(deleteItem);

  beforeEach(() => {
    vi.clearAllMocks();
    mockGetList.mockResolvedValue([...LIST_DTO]);
  });

  it('отображает список элементов после загрузки', async () => {
      const { getByText } = await render(<CaseApiComponent />);
      await expect.element(getByText('text1')).toBeInTheDocument()
      await expect.element(getByText('text2')).toBeInTheDocument()
      await expect.element(getByText('text3')).toBeInTheDocument()
  });

  it('удаляет элемент при нажатии на кнопку удаления', async () => {
    mockDeleteItem.mockResolvedValue(undefined);
      const { getByText, getByRole } = await render(<CaseApiComponent />);

      await expect.element(getByText('text1')).toBeInTheDocument()

    // Находим и нажимаем кнопку удаления для первого элемента
      await getByRole('row', { name: /text1/i })
          .getByRole('button', { name: /delete/i })
          .click();

    // Проверяем, что функция удаления была вызвана с правильным ID
    expect(mockDeleteItem).toHaveBeenCalledWith('1');

    // Проверяем, что элемент был удален из списка
      await expect.element(getByText('text1')).not.toBeInTheDocument()
      await expect.element(getByText('text2')).toBeInTheDocument()
      await expect.element(getByText('text3')).toBeInTheDocument()
  });
});