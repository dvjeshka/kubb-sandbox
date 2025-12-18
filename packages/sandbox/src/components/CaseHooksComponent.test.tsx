import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from 'vitest-browser-react';
import CaseHooksComponent from './CaseHooksComponent';
import { LIST_DTO } from '../mocks/data';
import { useGetList } from 'kubb-lib/hooks/useGetList';
import { useDeleteItem } from 'kubb-lib/hooks/useDeleteItem';

// Мокаем хуки
vi.mock('kubb-lib/hooks/useGetList');
vi.mock('kubb-lib/hooks/useDeleteItem');

describe('CaseHooksComponent', () => {
    const mockUseGetList = vi.mocked(useGetList);
    const mockUseDeleteItem = vi.mocked(useDeleteItem);
    const mockTrigger = vi.fn().mockResolvedValue(undefined);

    beforeEach(() => {
        vi.clearAllMocks();
        // Настраиваем мок для useGetList
        mockUseGetList.mockReturnValue({
            data: [...LIST_DTO],
            isLoading: false,
            error: null,
            mutate: vi.fn()
        });

        // Настраиваем мок для useDeleteItem
        mockUseDeleteItem.mockReturnValue({
            trigger: mockTrigger,
            isMutating: false,
            error: null
        });
    });

    it('отображает список элементов после загрузки', async () => {
        const { getByText } = await render(<CaseHooksComponent />);
        await expect.element(getByText('text1')).toBeInTheDocument();
        await expect.element(getByText('text2')).toBeInTheDocument();
        await expect.element(getByText('text3')).toBeInTheDocument();
    });

    it('вызывает trigger с правильными параметрами при удалении элемента', async () => {
        const { getByText, getByRole } = await render(<CaseHooksComponent />);

        await expect.element(getByText('text1')).toBeInTheDocument();

        // Находим и нажимаем кнопку удаления для первого элемента
        await getByRole('row', { name: /text1/i })
            .getByRole('button', { name: /delete/i })
            .click();

        // Проверяем, что trigger был вызван с правильными параметрами
        expect(mockTrigger).toHaveBeenCalledWith({ id: '1' });
    });

});