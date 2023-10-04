import httpRequest from './api/httpRequest';
import { WithPagination } from '../interface/response.interface';
import {IFolder, IGetFoldersPayload} from "../state/features/folder/folder.interface.ts";

class FolderService {
    getFolders(params: IGetFoldersPayload) {
        return httpRequest.get<WithPagination<IFolder[]>>('folder/list', params);
    }

    addFolder(folder: IFolder) {
        return httpRequest.post<IFolder>('folder/create', folder);
    }

    updateFolder(folder: IFolder) {
        return httpRequest.put<IFolder>('folder/update', folder);
    }

    deleteFolder(id: number) {
        return httpRequest.delete<IFolder>('folder/delete', { id: id });
    }
}

export default new FolderService();
