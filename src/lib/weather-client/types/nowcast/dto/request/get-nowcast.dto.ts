
export type GetNowcastRequestDto = {
	/** 발표일자 (yyyyMMdd) */
	baseDate: string;
	/** 발표시각 (HHmm) */
	baseTime: string;
	nx: number;
	ny: number;
};
